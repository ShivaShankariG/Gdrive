import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class NavBar extends React.Component
{
    render()
    {
        return(
            <div className="navbarleftdiv">
                <ul>

                    <li className="navbarlistitem" ><FlatButton label="New" /></li>
                    <li className="navbarlistitem" ><FlatButton label="New" /> </li>
                    <li className="navbarlistitem" ><FlatButton label="New" /> </li>
                    <li className="navbarlistitem" ><FlatButton label="New" /> </li>
                </ul>
            </div>
        );

    }
}