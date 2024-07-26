import img from "./photo.jpg"
function Popup({sendData})
{
const  showDetailsPopUp = () => {
	const moreSection = document.querySelector(".more_section");
	const body = document.querySelector("body");
	const overlay = document.querySelector(".overlay");
	const footer = document.querySelector(".more-footer-container");
	sendData('hide')

	if (moreSection.style.left == "0px") {
		moreSection.style.left = "-100%";
		// body.style.overflow = "auto";
		overlay.style.display = "none";
	} else {
		moreSection.style.left = "0px";
		// body.style.overflow = "hidden";
		overlay.style.display = "block";
	}
};

const goBack = () => {
	const moreSection2 = document.querySelector(".more_section2");

	if (moreSection2.style.left == "0px") {
		moreSection2.style.left = "-100%";
		body.style.overflow = "auto";
	} else {
		moreSection2.style.left = "0px";
		body.style.overflow = "hidden";
	}
};
	 
	return(
	<>
		<div className="overlay">

		<div className="more_section" id="conaitnerCheck">
			<div className="more_container">
				<div className="more_container_head">
					<h1 className="more_container_title">HTML basics</h1>
					<h1 className="more_close" onClick={showDetailsPopUp}>
						<i className="fas fa-times"></i>
					</h1>
				</div>
				<div className="more_banner_holder">
					<img src={img} alt="" />
				</div>
				<div className="more_description">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure
						aliquid dolor laborum, suscipit laboriosam totam a! Dicta aliquam,
						eos vitae iusto accusantium ratione inventore praesentium
						repudiandae sed quaerat voluptatum.
					</p>
				</div>

				<div className="more_roadmap">
					<h3 className="more_roadmap_heading">Roadmap</h3>
					<div className="more_roadmap_cont">
						<div className="more_roadmap_card" style={{marginTop: "0"}}>
							<p>Html Tag</p>
						</div>
						<div className="more_path">
							<svg
								className="svg-line scale-change"
								xmlns="http://www.w3.org/2000/svg"
								height="96"
								viewBox="0 0 128 100"
								fill="none"
								preserveAspectRatio="none">
								<path
									d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
									stroke="white"
									strokeOpacity="0.2"
									strokeWidth="2"
									strokeLinecap="round"
									strokeDasharray="8 8"
									vectorEffect="non-scaling-stroke"></path>
							</svg>
						</div>
						<div className="more_roadmap_card" style={{alignSelf: "end"}}>
							<p>Html Tag</p>
						</div>
						<div className="more_path">
							<svg
								className="svg-line"
								xmlns="http://www.w3.org/2000/svg"
								width="30%"
								height="96"
								viewBox="0 0 128 100"
								fill="none"
								preserveAspectRatio="none">
								<path
									d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
									stroke="white"
									strokeOpacity="0.2"
									strokeWidth="2"
									strokeLinecap="round"
									strokeDasharray="8 8"
									vectorEffect="non-scaling-stroke"></path>
							</svg>
						</div>
						<div className="more_roadmap_card">
							<p>Html Tag</p>
						</div>
						<div className="more_path">
							<svg
								className="svg-line scale-change"
								xmlns="http://www.w3.org/2000/svg"
								height="96"
								viewBox="0 0 128 100"
								fill="none"
								preserveAspectRatio="none">
								<path
									d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
									stroke="white"
									strokeOpacity="0.2"
									strokeWidth="2"
									strokeLinecap="round"
									strokeDasharray="8 8"
									vectorEffect="non-scaling-stroke"></path>
							</svg>
						</div>
						<div className="more_roadmap_card" style={{alignSelf: "end"}}>
							<p>Html Tag</p>
						</div>
					</div>
				</div>

				<div className="more-simplified">
					<div className="more_roadmap_heading">
						<p>techsnap Curated Courses</p>
					</div>
					<div className="more-course-cont">
						<div className="more-course-card">
							<div className="more-ccard-heading">Staff Pick</div>
							<div className="ccard-content">
								<div className="ccard-students">
									<p>12,355 sturdents</p>
									<p>56min</p>
								</div>
								<h4>
									Frontend full detailed course with html, css ,bootstarp and
									other.
								</h4>
								<div className="ccard-bookmark">
									<p>Dale DmCok</p>
									<img src="assets/bookmark-white.png" alt="" />
								</div>

								<div className="ccard-btn">view course</div>
							</div>
						</div>
					</div>
				</div>

				<div className="more-related">
					<div className="more_roadmap_heading">
						<p>Related Experts</p>
					</div>
					<div className="more-related-cont">
						<div className="more-related-card">
							<div className="more-related-heading">
								<img
									className="related-img"
									src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
									alt="" />
								<div className="related-details">
									<div className="related-tags">
										<div className="tag-item">Insturctor</div>
										<div className="tag-item">Creator</div>
									</div>

									<h3>John Robert</h3>

									<div className="related-believers">
										<img src="assets/people.png" alt="" />
										<p>300 Believers this month</p>
									</div>
								</div>
							</div>
							<h2>
								Lorem, ipsum dolor sit amet coctur adipisicing elit. Deleniti,
								fugit.
							</h2>

							<div className="related-btns">
								<div className="connect-btn">Connect</div>
								<div className="connect-btn message-btn">message</div>
							</div>
						</div>
						<div className="more-related-card">
							<div className="more-related-heading">
								<img
									className="related-img"
									src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
									alt="" />
								<div className="related-details">
									<div className="related-tags">
										<div className="tag-item">Insturctor</div>
										<div className="tag-item">Creator</div>
									</div>

									<h3>John Robert</h3>

									<div className="related-believers">
										<img src="assets/people.png" alt="" />
										<p>300 Believers this month</p>
									</div>
								</div>
							</div>
							<h2>
								Lorem, ipsum dolor sit amet coctur adipisicing elit. Deleniti,
								fugit.
							</h2>

							<div className="related-btns">
								<div className="connect-btn">Connect</div>
								<div className="connect-btn message-btn">message</div>
							</div>
						</div>
						<div className="more-related-card">
							<div className="more-related-heading">
								<img
									className="related-img"
									src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
									alt="" />
								<div className="related-details">
									<div className="related-tags">
										<div className="tag-item">Insturctor</div>
										<div className="tag-item">Creator</div>
									</div>

									<h3>John Robert</h3>

									<div className="related-believers">
										<img src="assets/people.png" alt="" />
										<p>300 Believers this month</p>
									</div>
								</div>
							</div>
							<h2>
								Lorem, ipsum dolor sit amet coctur adipisicing elit. Deleniti,
								fugit.
							</h2>

							<div className="related-btns">
								<div className="connect-btn">Connect</div>
								<div className="connect-btn message-btn">message</div>
							</div>
						</div>
						<div className="more-related-card">
							<div className="more-related-heading">
								<img
									className="related-img"
									src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
									alt="" />
								<div className="related-details">
									<div className="related-tags">
										<div className="tag-item">Insturctor</div>
										<div className="tag-item">Creator</div>
									</div>

									<h3>John Robert</h3>

									<div className="related-believers">
										<img src="assets/people.png" alt="" />
										<p>300 Believers this month</p>
									</div>
								</div>
							</div>
							<h2>
								Lorem, ipsum dolor sit amet coctur adipisicing elit. Deleniti,
								fugit.
							</h2>

							<div className="related-btns">
								<div className="connect-btn">Connect</div>
								<div className="connect-btn message-btn">message</div>
							</div>
						</div>
					</div>
				</div>

				<div className="more-projects">
					<div className="more_roadmap_heading">
						<p>Related Projects</p>
					</div>
					<div className="more-course-cont">
						<div className="more-course-card projects-card">
							<div className="more-project-heading">
								<img
									src="https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__"
									alt="" />
							</div>
							<div className="projects-content">
								<p>practice project</p>
								<h2>Amazon clone using React</h2>
								<h3>
									Nowdays the firrst thing someone does when they create a new
									business for trading goods is to...
								</h3>

								<h3>
									Prerequisite(s)<br />
									HTML, CSS, JavaScript
								</h3>

								<div className="projects-btn">view project</div>
							</div>
						</div>
						<div className="more-course-card projects-card">
							<div className="more-project-heading">
								<img
									src="https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__"
									alt="" />
							</div>
							<div className="projects-content">
								<p>practice project</p>
								<h2>Amazon clone using React</h2>
								<h3>
									Nowdays the firrst thing someone does when they create a new
									business for trading goods is to...
								</h3>

								<h3>
									Prerequisite(s)<br />
									HTML, CSS, JavaScript
								</h3>

								<div className="projects-btn">view project</div>
							</div>
						</div>
						<div className="more-course-card projects-card">
							<div className="more-project-heading">
								<img
									src="https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__"
									alt="" />
							</div>
							<div className="projects-content">
								<p>practice project</p>
								<h2>Amazon clone using React</h2>
								<h3>
									Nowdays the firrst thing someone does when they create a new
									business for trading goods is to...
								</h3>

								<h3>
									Prerequisite(s)<br />
									HTML, CSS, JavaScript
								</h3>

								<div className="projects-btn">view project</div>
							</div>
						</div>
					</div>
				</div>

				<div className="more-external">
					<div className="more_roadmap_heading">
						<p>External Resources</p>
					</div>
					<div className="more-external-cont">
						<div className="more-external-card">
							<div className="more-external-heading">
								<img src="assets/link.png" alt="" />
								<p>webilnk</p>
							</div>

							<h2>W3Schools:Learn HTML</h2>

							<p className="external-text">added by <span>techsnap</span></p>

							<div className="external-btn">visit weblink</div>
						</div>
						<div
							className="more-external-card"
							style={{backgroundColor:'rgb(168, 255, 127)'}}>
							<div className="more-external-heading">
								<img src="assets/link.png" alt="" />
								<p>webilnk</p>
							</div>

							<h2>W3Schools:Learn HTML</h2>

							<p className="external-text">added by <span>techsnap</span></p>

							<div className="external-btn">visit weblink</div>
						</div>
						<div className="more-external-card">
							<div className="more-external-heading">
								<img src="assets/link.png" alt="" />
								<p>webilnk</p>
							</div>

							<h2>W3Schools:Learn HTML</h2>

							<p className="external-text">added by <span>techsnap</span></p>

							<div className="external-btn">visit weblink</div>
						</div>
						<div className="more-external-card">
							<div className="more-external-heading">
								<img src="assets/link.png" alt="" />
								<p>webilnk</p>
							</div>

							<h2>W3Schools:Learn HTML</h2>

							<p className="external-text">added by <span>techsnap</span></p>

							<div className="external-btn">visit weblink</div>
						</div>
					</div>
				</div>

				<div className="more-resource">
					<div className="more-resource-card">
						<p>Resource center</p>
					</div>
				</div>

				<div className="more-footer">
					<div className="more-footer-container">
						<p>view in details</p>
						<p>view external resources</p>
					</div>
				</div>
			</div>
		</div>
		</div>


		{/* <div className="more_section2">
			<div className="more_section2_container">
				<div className="second" onClick={goBack}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-arrow-left"
						viewBox="0 0 16 16">
						<path
							d="M8.354 2.354a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708-.708L3.707 9H14.5a.5.5 0 0 0 0-1H3.707l4.147-4.146a.5.5 0 0 0 0-.708z"></path>
					</svg>
				</div>

				<h1 className="more_container_title">Second Pop-Up</h1>
				<p>This is the content of the second pop-up.</p>
			</div>
		</div> */}
		</>
)
}

export default Popup;
		