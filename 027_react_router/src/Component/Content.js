import React, { Component } from 'react';

class Content extends Component {
    render() {
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
                        <h1 className="font-weight-normal">Man must explore, and this is exploration at its greatest</h1>
                        <p className="lead">Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.<br /><br />
                        Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.<br /><br />
                        What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.<br /><br />
                        A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.<br /><br />
                        For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.
                        </p>
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