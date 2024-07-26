import "./timeline.css";
import "./Roadmap.css";
import React from "react";
import { useEffect, useState } from "react";
import Popup from "./fix3.jsx";
import "./global.css";
import "./timeline2.css";
import amazonImage from './amazon.png';
import companyimg1 from './company-img1.png';
import companyimg2 from './company-img2.png';
import companyimg3 from './company-img3.png';
import "./more.css";
import TrustedAuthors from "./slidercomponent.jsx";
import Fix2 from "./fix2.jsx";
function Timeline()
{
	let [showmoresection, setShowMoreSection]=useState('hide');


	let handleClose =(data)=>{
		setShowMoreSection(data)
	}
	useEffect(()=>{
		handleClose()
	},[])

	const showDetailsPopUp = () => {
		setShowMoreSection('show');
		console.log(showmoresection)
	};


return(
	<>
<section className="career">
	<div className="career-container">
		<div className="career-row1">
			<div className="career-head">
				<p>Career path |</p>
				<p className="career-t1">Human Generated</p>
				<p className="career-t2">certification available</p>
			</div>
			<h1 className="career-heading">Become Frontend Developer</h1>
			<p className="career-content">
				In this track, you’ll discover everything you need to know to become
				a data engineer by learning Python, SQL, and Git from scratch.
				You'll discover how to interact with relational databases to query,
				input, and modify data and get hands-on experience in importing and
				cleaning data in Python, optimizing your code for efficiency, and
				writing tests to validate your code. Throughout this track, you’ll
				learn some of the essential data engineering tools, starting with
				SQL and Python, before moving on to topics such as cloud computing,
				clearing data, and working with Git. These foundational skills will
				allow you to work with data in various ways, building the knowledge
				you need to become a data engineer.   You'll also learn the key
				concepts and skills required by data engineers such as how to
				interpret data visualizations, create functions, and utilize version
				control.  By the end of this track, you'll be equipped with the
				necessary tools and knowledge to progress your career by handling
				common data engineering duties.
			</p>
			<div className="career-buttons">
				<div className="career-join">Join Waitlist</div>
				<div className="career-view">View curated course</div>
				<div className="career-know">know in details</div>
			</div>
		</div>
		<div className="career-row2">
			<div className="blank"></div>
			<div className="blank"></div>
			<div className="career-logo-container">
				<div className="career-logos">
					<img src={amazonImage} alt="" />
					<img src={companyimg1} alt="" />
					<img src={companyimg2} alt="" />
					<img src={companyimg3} alt="" />
				</div>
				<h4>View companies</h4>
			</div>
		</div>
	</div>
</section>
<section className="hero-section">
			<div className="timeline_title">
				<h1>START YOUR JOURNEY</h1>
			</div>
			<div className="container">
				<div className="timeline">
					<div className="timeline-container primary" data-aos="fade-up">
						<div className="timeline-icon">
							<i className="fab fa-html5"></i>
						</div>
						<div className="timeline-body timeline-html">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">
										<i className="ri-file-2-line"></i>
									</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice"></div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">
								Embark on a coding adventure with HTML
							</h1>
							<p className="timeline-content">
								HTML is the basic and must have skill-set for every web
								developer. It is used and extended by various other
								technologies. To be completely able to understand how things
								work in web development, you should develop an understanding of
								HTML
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
					<div className="timeline-container danger" data-aos="fade-up">
						<div className="timeline-icon"><i className="fab fa-css3-alt"></i></div>
						<div className="timeline-body timeline-css">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">
										<i className="ri-file-2-line"></i>
									</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice">
										<i className="ri-code-box-line"></i>
									</div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">Style your Success with Css</h1>
							<p className="timeline-content">
								CSS is another important language amongst the web development
								trifecta. It will help you style, plan a layout and control the
								behaviour and look and feel of the web apps that you build.
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
					<div className="timeline-container success" data-aos="fade-up">
						<div className="timeline-icon"><i className="fab fa-js-square"></i></div>
						<div className="timeline-body timeline-javascript">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">3</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice">
										<i className="ri-code-box-line"></i>
									</div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">Join the JavaScript journey</h1>
							<p className="timeline-content">
								The third one amongst the must learn trifecta, Js is present in
								about 90% of the internet. To make sense of what you’re doing
								and to design and build new web apps, this language is used
								predominantly, and it is indispensable
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
					<div className="timeline-container warning" data-aos="fade-up">
						<div className="timeline-icon"><i className="fab fa-react"></i></div>
						<div className="timeline-body timeline-react">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">
										<i className="ri-file-2-line"></i>
									</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice">
										<i className="ri-code-box-line"></i>
									</div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">React to success with ReactJs</h1>
							<p className="timeline-content">
								Reactjs is the best and most popular framework for front-end
								development. An integral part of the MERN stack, its community
								is great, and the demand for reactjs specialists is only
								increasing day-by-day. React is great for Rapid app development,
								SPAs and for creating awesome responsive and interactive web
								apps
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
					<div className="timeline-container" data-aos="fade-up">
						<div className="timeline-icon"><i className="fab fa-node-js"></i></div>
						<div className="timeline-body timeline-node">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">
										<i className="ri-file-2-line"></i>
									</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice">
										<i className="ri-code-box-line"></i>
									</div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">Embark on a Node journey</h1>
							<p className="timeline-content">
								Nodejs is a great skill to have. It is JS based, and it
								completes the javascript full stack experience. It is a backend
								skill, which is in demand and pays well
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
					<div className="timeline-container info" data-aos="fade-up">
						<div className="timeline-icon"><i className="fas fa-database"></i></div>
						<div className="timeline-body timeline-mongodb">
							<div className="gradient"></div>
							<div className="timeline-lessons">
								<div className="timeline-lesson">
									<div className="icon">
										<i className="ri-file-2-line"></i>
									</div>
									<p>23 lessons</p>
								</div>
								<div className="timeline-practice">
									<div className="practice">
										<i className="ri-code-box-line"></i>
									</div>
									<p>33 practices</p>
								</div>
							</div>

							<h1 className="timeline-headline">Master the MongoDb</h1>
							<p className="timeline-content">
								This is a data driven schema-less NoSql database. It is a great
								tool to know. The syntax is very similar to javascript making it
								much easier to learn. You can use this for projects of any size
								and is also very easy to scale up or down depending on your
								requirements
							</p>
							<div className="timeline-foot">
								<p className="timeline-subtitle">2 Hours Ago</p>
								<button className="timeline-button" onClick={showDetailsPopUp}>
									view details
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="about">
			<div className="about-container">
				<h1 className="about-heading">Also Must to know about</h1>
				<div className="about-row1">
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
					<div className="about-card">
						<p>Skill path | Human generated</p>
						<h1>Git & Github</h1>
						<p>
							You will investigate a dataset from a fictitious company called
							Databel in Power BI, and need to figure out why ...
						</p>
						<div className="about-buttons">
							<div className="about-viewbtn">View skill path</div>
							<div className="about-enrollbtn">Enroll now</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<TrustedAuthors/>
		<section className="ready">
			<div className="ready-container">
				<h1 className="ready-heading">Ready to Kickstart Your Career</h1>

				<div className="ready-card-container">
					<div className="ready-card">start the careerpath</div>
					<div className="ready-card">View all courses</div>
					<div className="ready-card">Edit to make your own</div>
					<div className="ready-card">Get Live mentor</div>
					<div className="ready-card">Get percentage</div>
				</div>
			</div>
		</section>
		<section className="feedback">
			<div className="feedback-container">
				<div className="feedback-grid">
					<div className="feedback-item fi1">
						<div className="fi-head">
							<img
								className="fi-img"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="" />
							<div className="fi-desc">
								<h4>Daniel Clifford</h4>
								<p>Verified Graduate</p>
							</div>
						</div>
						<h2 className="feedback-heading">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Blanditiis dolorum voluptatum quod ipsa et.
						</h2>
						<p className="feedback-content">
							"Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, sequi consequuntur incidunt velit molestiae quae
							placeat libero hic dolore in voluptatum repellat excepturi fuga
							eveniet dignissimos? Minus perspiciatis modi maiores culpa rem
							maxime inventore quae, assumenda cupiditate natus, itaque in
							repudiandae sint deserunt. Totam, similique soluta! Quis
							doloremque omnis sint deserunt. Totam, similique soluta! Quis
							doloremque omnis ad"
						</p>
					</div>
					<div className="feedback-item fi2">
						<div className="fi-head">
							<img
								className="fi-img"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="" />
							<div className="fi-desc">
								<h4>Daniel Clifford</h4>
								<p>Verified Graduate</p>
							</div>
						</div>
						<h2 className="feedback-heading">
							The team was very supportive to keep me motivated.
						</h2>
						<p className="feedback-content">
							"I started as total newbie with virtually no coding skills. I now
							work as mobile engineer for a big company.This was the best
							investiment I have made in myself."
						</p>
					</div>
					<div className="feedback-item fi3">
						<div className="fi-head">
							<img
								className="fi-img"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="" />
							<div className="fi-desc">
								<h4>Daniel Clifford</h4>
								<p>Verified Graduate</p>
							</div>
						</div>
						<h2 className="feedback-heading">
							Such a life changing experience. Highly redcommended!
						</h2>
						<p className="feedback-content">
							"Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, sequi consequuntur incidunt velit molestiae quae
							placeat libero hic dolore in voluptatum repellat excepturi fuga
							eveniet dignissimos? Minus perspiciatis modi maiores culpa rem
							maxime inventore quae, assumenda cupiditate natus, itaque in
							repudiandae sint deserunt. Totam, similique soluta! Quis
							doloremque omnis ae quae, assumenda cupiditate natus, itaque in
							repudiandae sint deserunt. Totam, similique soluta! Quis
							doloremque omnis "
						</p>
					</div>
					<div className="feedback-item fi4">
						<div className="fi-head">
							<img
								className="fi-img"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="" />
							<div className="fi-desc">
								<h4>Daniel Clifford</h4>
								<p>Verified Graduate</p>
							</div>
						</div>
						<h2 className="feedback-heading">
							An overall wonderful and rewarding experience.
						</h2>
						<p className="feedback-content">
							"Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, sequi consequuntur incidunt velit molestiae quae
							placeat libero hi"
						</p>
					</div>
					<div className="feedback-item fi5">
						<div className="fi-head">
							<img
								className="fi-img"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="" />
							<div className="fi-desc">
								<h4>Daniel Clifford</h4>
								<p>Verified Graduate</p>
							</div>
						</div>
						<h2 className="feedback-heading">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Blanditiis dolorum voluptatum quod ipsa et.
						</h2>
						<p className="feedback-content">
							"Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, sequi consequuntur incidunt velit molestiae quae
							placeat libero hic dolore in voluptatum repellat excepturi fuga
							eveniet dignissimos? Minus perspiciatis modi maiores culpa rem
							maxime inventore quae, assumenda cupiditate natus, itaque in
							repudiandae sint deserunt. Totam, similique soluta! Quis
							doloremque omnis ad"
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="similar">
			<div className="similar-container">
				<h1 className="similar-heading">View similar careerpaths</h1>

				<div className="similar-card-container">
					<div className="similar-card">
						<img
							className="similar-img"
							src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1711102722~exp=1711103322~hmac=b4f258e36a63de6e852437452602b166dc57b70f3d6fd91dd60250f4c9dc8fc7"
							alt="" />
						<div className="similar-content">
							<div className="similar-subheading">
								<img src="assets/app-development.png" alt="" />
								<p>Data Science</p>
							</div>

							<h2>journey into Data Science with Python</h2>

							<p>
								Welcome to this extensive learning path designed to transition
								you fro...
							</p>
							<a className="similar-path-btn">See learning path</a>
						</div>
					</div>
					<div className="similar-card">
						<img
							className="similar-img"
							src="https://img.freepik.com/free-photo/world-environment-earth-day-concept-generative-ai_169016-28729.jpg?t=st=1711111893~exp=1711115493~hmac=6391eef6e85416ee765b5093210d09969dbb397f8e3f822ad7c90668666f5b19&w=826"
							alt="" />
						<div className="similar-content">
							<div className="similar-subheading">
								<img src="assets/app-development.png" alt="" />
								<p>Data Science</p>
							</div>

							<h2>journey into Data Science with Python</h2>

							<p>
								Welcome to this extensive learning path designed to transition
								you fro...
							</p>
							<a className="similar-path-btn">See learning path</a>
						</div>
					</div>
					<div className="similar-card">
						<img
							className="similar-img"
							src="https://img.freepik.com/free-photo/young-man-city-bus-stop-generative-ai_169016-28710.jpg?t=st=1711112005~exp=1711115605~hmac=9c76703abf78a8f44f98379a671e31759c4c3290c6317e61e77f6c58915bdcd5&w=826"
							alt="" />
						<div className="similar-content">
							<div className="similar-subheading">
								<img src="assets/app-development.png" alt="" />
								<p>Data Science</p>
							</div>

							<h2>journey into Data Science with Python</h2>

							<p>
								Welcome to this extensive learning path designed to transition
								you fro...
							</p>
							<a className="similar-path-btn">See learning path</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="something">
        <div className="something-container">
            <h1 className="something-heading">Looking for something else?</h1>
            <div className="something-row1">
                <h2 className="something-subheading">external resources</h2>
                <div className="something-cards">
                    <div className="something-card">
                        <p className="something-headline">Article</p>
                        <h2>JavaScript: All the Cool Kids Are Doing It</h2>
                        <p className="something-text">
                            Why is JavaScript so popular? What can you do with it?
                        </p>
                    </div>
					<div className="something-card">
                        <p className="something-headline">Article</p>
                        <h2>What is JavaScript?</h2>
                        <p className="something-text">
                            What is JavaScript, and how does it work?
                        </p>
                    </div>
					<div className="something-card">
                        <p className="something-headline">Article</p>
                        <h2>Why learn JavaScript foundations?</h2>
                        <p className="something-text">
                            Learn more about why you should build a strong foundation in
                            JavaScript when you first learn the language.
                        </p>
                    </div>
				<div className="something-row2">
                <h2 className="something-subheading">Related courses and paths</h2>
                <div className="something-cards">
                    <div className="something-card">
                        <p className="something-headline">Career path</p>
                        <h2>Front-End Engineer</h2>
                        <p className="something-text">
                            Front-end engineers work closely with designers to make websites
                            beautiful, functional, and fast.
                        </p>
						<div className="something-bottom">
                            <div className="something-bottom-content">
                                <p>Includes <span>34 Courses</span></p>
                            </div>
                            <div className="something-bottom-content">
                                <img src="assets/certificate.png" alt="" />
                                <p>With <span> Professional Certification</span></p>
                            </div>
                            <div className="something-bottom-content something-low">
                                <div className="something-flex">
                                    <img src="assets/signal.png" alt="" />
                                    <p><strong>Beginner </strong> Friendly</p>
                                </div>
                                <p>115 hours</p>
                            </div>	
                        </div>
					</div>
					<div className="something-card">
					<p className="something-headline" style={{ backgroundColor: 'rgb(15, 94, 48)' }}>
  Free course
</p>
							<h2>Choosing a Career in Tech</h2>
							<p className="something-text">
								Are you feeling confused about where to aim for with your career
								goals? Take this course to learn about different career options!
							</p>

							<div className="something-bottom">
								<div className="something-bottom-content something-low">
									<div className="something-flex">
										<img src="assets/signal.png" alt="" />
										<p><strong>Beginner </strong> Friendly</p>
									</div>
									<p>1 hour</p>
								</div>
							</div>
						</div>
						<div className="something-card">
						<p className="something-headline" style={{ backgroundColor: 'rgb(15, 94, 48)' }}>
  Free course
</p>
							<h2>Learn the Basics of Programming with Codecademy</h2>
							<p className="something-text">
								This course is for new programmers who aren't sure what they
								want to learn about. Take this course to jumpstart your learning
								journey!
							</p>

							<div className="something-bottom">
								<div className="something-bottom-content something-low">
									<div className="something-flex">
										<img src="assets/signal.png" alt="" />
										<p><strong>Beginner </strong> Friendly</p>
									</div>
									<p>1 hour</p>
								</div>
							</div>
						</div>
            </div>
        </div>
	</div>
	</div>
	</div>
    </section>
	
	{showmoresection === 'show' ? <div><Popup sendData={handleClose} /></div>:null }
	
	
</>
)
};

export default Timeline;