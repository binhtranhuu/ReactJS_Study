import React, { Component } from 'react';
import ContentItems from './ContentItems';
import Data from './../Data/Data.json';

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
                    <div className="row my-2">
                        {
                            Data.map((value, key) => {
                                return (
                                    <ContentItems id={value.id} key={key} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}></ContentItems>
                                )
                            })
                        }
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