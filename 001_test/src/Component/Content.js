import React, { Component } from 'react';
import Data from './../Data/Data.json';
class Content extends Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <header className="masthead custom-masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Content of my blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Begin content  */}
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            {
                                Data.map((value, key) => {
                                    if (value.id == this.props.match.params.id) {
                                        return (
                                        <div>
                                            <h1 className="font-weight-normal">{value.tieuDe}</h1>
                                            <p className="lead">{value.noiDung}</p>
                                        </div>
                                        )
                                    }
                                })
                            }
                            <div className="clearfix">
                                <a className="btn btn-primary float-left" href="/startbootstrap-clean-blog-jekyll/2020/01/29/exploration.html" data-toggle="tooltip" data-placement="top" title data-original-title="Failure is not an option">← Previous<span className="d-none d-md-inline">
                                    Post</span></a>
                                <a className="btn btn-primary float-right" href="/startbootstrap-clean-blog-jekyll/2020/01/31/heartbeats.html" data-toggle="tooltip" data-placement="top" title data-original-title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.">Next<span className="d-none d-md-inline">
                                    Post</span> →</a>
                            </div>
                            <div className="col-lg-8 col-md-10 mx-auto mt-4">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="far fa-envelope fa-stack-1x fa-inverse" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fab fa-github fa-stack-1x fa-inverse" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;