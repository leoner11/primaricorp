<!-- <script>
	let handleSubmit = () => {
		const endpoint = import.meta.env.VITE_API_OTP_VERIFICATION_URL;
		// const endpoint = "http://127.0.0.1:8000/api/otp_verification/";
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: emailAddress
			})
		};
		fetch(endpoint, requestOptions)
			.then((response) => response.json().then((data) => ({ status: response.status, body: data })))
			.then((data) => {
				if (data.status === 500) {
					dataStatus = data.status;
					currentData = data.body;
				} else if (data.status === 400) {
					dataStatus = data.status;
					currentData = data.body;
				}
			});
	};
</script> -->

<div class="bg-base-300 p-4 xl:p-10 rounded-lg">
	<div id="contact-us" class="text-3xl font-bold text-center my-5">Contact Us</div>
	<div class="flex justify-center items-center w-full max-w-4xl p-4">
		<div class="relative w-full bg-gray-800 rounded-lg shadow-lg">
			<div class="flex justify-between items-center p-4 bg-gray-700 rounded-t-lg">
				<div class="flex space-x-2">
					<div class="w-2.5 h-2.5 bg-white rounded-full" />
					<div class="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
					<div class="w-2.5 h-2.5 bg-green-500 rounded-full" />
				</div>
				<div class="flex space-x-1">
					<div class="w-1 h-1 bg-gray-400 rounded-full" />
					<div class="w-1 h-1 bg-gray-400 rounded-full" />
					<div class="w-1 h-1 bg-gray-400 rounded-full" />
				</div>
			</div>

			<div class="flex flex-col sm:flex-row p-8">
				<div class="flex flex-col w-full sm:w-2/3">
					<div class="mb-4">
						<div
							class="w-full p-2.5 bg-transparent border-b border-gray-500 text-white placeholder-gray-500 focus:border-white focus:outline-none"
						>
							Email: admin@primaricorp.com
						</div>
					</div>

					<div class="mb-4">
						<div
							class="w-full p-2.5 bg-transparent border-b border-gray-500 text-white placeholder-gray-500 focus:border-white focus:outline-none"
						>
							Contact Us: 021-39721586
						</div>
					</div>

					<!-- <div class="mb-6">
							<textarea
								class="w-full p-2.5 bg-transparent border-b border-gray-500 text-white placeholder-gray-500 focus:border-white focus:outline-none"
								id="body"
								name="body"
								placeholder="Message"
							/>
						</div> -->

					<!-- <div class="flex justify-end space-x-4">
							<button type="submit" class="btn btn-primary transition-color duration-300 text-lg"
								>Send</button
							>
						</div> -->
				</div>
			</div>
		</div>
	</div>
</div>
