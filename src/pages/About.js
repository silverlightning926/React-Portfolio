import React, {Component} from "react";
import Header from "../components/Header";

class About extends Component
{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render()
    {
        return (
            <>
                <Header title="About"/>
                <div className="page-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nisl risus. In hac habitasse platea dictumst.
                        Integer eleifend vestibulum lectus et efficitur. Donec a ligula metus. Ut sed tristique lectus, quis aliquet est.
                        Nullam ante sapien, maximus ac ullamcorper id, vestibulum eget odio. Vivamus odio felis, malesuada et porttitor eu, maximus nec mi.
                        Fusce vitae pellentesque risus. Proin pellentesque bibendum arcu et vulputate.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Nullam et est a elit tristique placerat.
                    </p>

                    <p>
                        Proin dapibus scelerisque purus, id facilisis erat laoreet nec.
                        Morbi sit amet tortor iaculis, pellentesque purus ac, porttitor nunc.
                        Vestibulum condimentum, tellus vestibulum facilisis sagittis, erat nunc vehicula lacus, consectetur molestie mi enim in sem.
                        Vivamus arcu nulla, dapibus eu augue ut, euismod feugiat lacus. Nunc dictum consequat nibh, et semper libero pretium quis.
                        Vivamus mauris sem, gravida id nunc et, commodo hendrerit nisl. Nulla aliquam pharetra sagittis.
                        Vestibulum tempor pulvinar nibh, in sollicitudin libero hendrerit vitae. Suspendisse pharetra elementum massa in ultrices.
                        Aenean tempor molestie magna, vel ullamcorper turpis fringilla vitae. Maecenas pretium odio at mattis congue.
                        Nunc lacus quam, elementum eu massa nec, placerat scelerisque libero. Nulla ac dignissim quam, nec fermentum nunc.
                        Nullam semper pretium consequat. Aenean iaculis nisi nec dui posuere consequat.
                        Morbi vulputate ex sit amet tellus posuere feugiat.
                    </p>

                    <p>
                        Sed vel pulvinar ipsum, sed blandit enim.
                        Praesent tincidunt vehicula ligula quis imperdiet.
                        Nulla nec enim id velit condimentum lobortis. Fusce faucibus odio non diam tincidunt aliquam.
                        Vivamus vitae dapibus nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Aliquam placerat, sapien vel imperdiet imperdiet, mi mauris placerat enim, ut placerat eros turpis in arcu.
                        Nulla ut metus eu diam molestie sagittis aliquet ac elit. Sed et leo maximus, volutpat lacus at, elementum tellus.
                        Donec luctus placerat congue. Maecenas vitae lacinia eros. Phasellus maximus erat nibh, nec ullamcorper nisl convallis at.
                        Phasellus purus ex, scelerisque nec congue a, consectetur ac magna.
                    </p>

                    <h1>Links</h1>
                    <ul>
                        <li><a href="https://github.com/silverlightning926">Github</a></li>
                        <li><a href="https://stackoverflow.com/users/10915344/silverlightning">Stack Overflow</a></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default About;