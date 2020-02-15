import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'

class Navigation  extends React.Component {

    constructor () {
        super ()

        this.state = {
            title: "Azaan Virk"
        }
    }

    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1 className="titleHeader">{this.state.title}</h1>
                </div>
                <div className="nav">
                    <NavLink className="home Link grow" activeClassName="active" to={'/Home'}>Home</NavLink>
                    <NavLink
                        className="about Link grow"
                        activeClassName="active"
                        to={'/About'}>About</NavLink>
                    <NavLink className="projects Link grow" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink className="exampleForm Link grow" activeClassName="active" to={'/ExampleForm'}>Example Form</NavLink>
                    <NavLink className="references Link grow" activeClassName="active" to={'/References'}>References</NavLink>
                    <NavLink className="email Link grow" activeClassName="active" to={'/Email'}>Email</NavLink>
                    <NavLink className="hiring Link grow" activeClassName="active" to={'/Hiring'}>Hiring</NavLink>
                    <NavLink className="documentation Link grow" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
            </div>
        )
    }
}

// let animateTitle = () => {
//     anime({
//         targets: '.title',
//         translateX: [
//             {value: 100, duration: 1000, delay: 0},
//             {value: 0, duration: 1000, delay: 0}
//         ],
//         easing: 'linear',
//         loop: true
//     });
// }

// animateTitle()

export default Navigation