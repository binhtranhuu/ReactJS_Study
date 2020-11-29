import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div>
                <header className="masthead custom-masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Category of my blog</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* Begin Category */}
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 my-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                        <a href="/"><img className="card-img-top img-fluid" src="http://placehold.it/800x400" alt="My blog" /></a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="/">Title of my blog</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem tenetur in distinctio dolor numquam sequi, maxime debitis blanditiis quo exercitationem cupiditate, similique ut laborum. Maiores obcaecati aspernatur beatae exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Begin pagination */}
                <div className="container">
                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Category;