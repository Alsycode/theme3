

function Features3({serviceData}) {
	console.log("*****",serviceData)
	// const featureItem = serviceData?.data[0]?.attributes.feature;
    return (
      <>
        {/* <!-- Our Fetures --> */}
		<section className="content-inner bg-white">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Fetures</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="#" className="icon-cell text-white"><i className={serviceData?.data[0]?.attributes.feature.feature[0].icon}></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">{serviceData?.data[0]?.attributes.feature.feature[0].heading}</h4>
										<p>{serviceData?.data[0]?.attributes.feature.feature[0].description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="#" className="icon-cell text-white"><i className={serviceData?.data[0]?.attributes.feature.feature[1].icon}></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">{serviceData?.data[0]?.attributes.feature.feature[1].heading}</h4>
										<p>{serviceData?.data[0]?.attributes.feature.feature[1].heading}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							 <img src={serviceData?.data[0]?.attributes?.feature?.featureImage?.data?.attributes?.formats?.large?.url} className="move-1" alt=""/> 
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="#" className="icon-cell text-white"><i className={serviceData?.data[0]?.attributes.feature.feature[2].icon}></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">{serviceData?.data[0]?.attributes.feature.feature[2].heading}</h4>
										<p>{serviceData?.data[0]?.attributes.feature.feature[2].description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="#" className="icon-cell text-white"><i className={serviceData?.data[0]?.attributes.feature.feature[3].icon}></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">{serviceData?.data[0]?.attributes.feature.feature[3].heading}</h4>
										<p>{serviceData?.data[0]?.attributes.feature.feature[3].description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Features3;