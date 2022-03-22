import React, { Component } from 'react'

class NavbarLink extends Component {
    render() {
        const linkClass = (this.props.currentLocation === this.props.link.location) ? "nav-link active" : "nav-link";
        const clickHandler = () => this.props.onNavigate(this.props.link.location);
        return (
            <li className="nav-item">
                <a className={linkClass} href="#" onClick={clickHandler}>
                    {this.props.link.title}
                </a>
            </li>
        )
    }
}

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">{this.props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { this.props.links.map(link => 
                            <NavbarLink 
                                link={link} 
                                key={link.location} 
                                currentLocation={this.props.currentLocation}
                                onNavigate={this.props.onNavigate} /> 
                        )}
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}