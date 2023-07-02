class CustomPromise {
	constructor(executor) {
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		this.state = 'pending';
		this.value = undefined;

		const resolve = (value) => {
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;
				this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
			}
		};

		const reject = (reason) => {
			if (this.state === 'pending') {
				this.state = 'rejected';
				this.value = reason;
				this.onRejectedCallbacks.forEach((callback) => callback(this.value));
			}
		};

		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}

	then(onFulfilled, onRejected) {
		return new CustomPromise((resolve, reject) => {
			const onFulfilledCallback = (value) => {
				try {
					if (typeof onFulfilled === 'function') {
						const result = onFulfilled(value);
						if (result instanceof CustomPromise) {
							result.then(resolve, reject);
						} else {
							resolve(result);
						}
					} else {
						resolve(value);
					}
				} catch (error) {
					reject(error);
				}
			};

			const onRejectedCallback = (reason) => {
				try {
					if (typeof onRejected === 'function') {
						const result = onRejected(reason);
						if (result instanceof CustomPromise) {
							result.then(resolve, reject);
						} else {
							resolve(result);
						}
					} else {
						reject(reason);
					}
				} catch (error) {
					reject(error);
				}
			};

			if (this.state === 'fulfilled') {
				setTimeout(() => {
					onFulfilledCallback(this.value);
				}, 0);
			} else if (this.state === 'rejected') {
				setTimeout(() => {
					onRejectedCallback(this.value);
				}, 0);
			} else {
				this.onFulfilledCallbacks.push(onFulfilledCallback);
				this.onRejectedCallbacks.push(onRejectedCallback);
			}
		});
	}

	catch(onRejected) {
		return this.then(undefined, onRejected);
	}

	static resolve(value) {
		return new CustomPromise((resolve) => {
			resolve(value);
		});
	}

	static reject(reason) {
		return new CustomPromise((resolve, reject) => {
			reject(reason);
		});
	}
}

let p = new CustomPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('Success!');
	}, 1000);
});
p.then((r) => {
	console.log(r);
}).catch((e) => {
	console.log(e);
});

const myPromise = new CustomPromise((resolve, reject) => {
	// Reject the Promise immediately
	reject('Error!');
});

myPromise.catch((error) => {
	console.error(error); // Output: Error!!
});
