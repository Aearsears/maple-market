import React from "react"

class Footer extends React.Component {
    render() {
        return (
			<footer className="w-full bg-Ash-Gray px-6 border-t inline-block">
				<div className="container mx-auto py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
					&copy;2019 Maple Market. All rights reserved.
					<div className="pt-4 md:p-0 text-center md:text-right text-xs">
						<a href="#" className="text-black no-underline hover:underline">Privacy Policy</a>
						<a href="#" className="text-black no-underline hover:underline ml-4">Terms &amp; Conditions</a>
						<a href="#" className="text-black no-underline hover:underline ml-4">Contact Us</a>
					</div>
				</div>
			</footer>
                );
    }
}

export default Footer;

