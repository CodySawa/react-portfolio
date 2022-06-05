import React from "react";

const About = () => {
    return (
        <section>
            <div>
                <h2>About Me</h2>
            </div>
            <div>
                <img src={require('../img/avatar.png')} alt="avatar icon" className="photo"/>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique, dui sit amet sollicitudin maximus, ex nunc tincidunt nibh, ac tempor felis massa a ligula. Cras malesuada egestas nisl ornare egestas. Phasellus malesuada ex vel leo rhoncus, sit amet rutrum mi dapibus. Nam congue velit purus. Aenean ut orci dignissim, efficitur elit a, efficitur sem. Sed mollis, ante id finibus lobortis, odio arcu commodo massa, quis placerat velit dui at eros. Vestibulum mattis at nibh id placerat. Aliquam eleifend arcu vitae ante tempor accumsan. Fusce luctus dignissim odio vulputate suscipit. Donec cursus gravida turpis. Praesent mollis orci eu ex varius, id commodo mauris tempor. Nunc facilisis accumsan rutrum. Proin sollicitudin rutrum lacus ac viverra. Aliquam massa nulla, rhoncus eget lectus id, scelerisque blandit dolor. Aenean vel ante neque. Morbi euismod felis sed vulputate scelerisque.
                </p>
                <p>
                    Curabitur id arcu ac odio tristique pretium nec in ex. Sed in tempor sapien. Mauris eu est diam. Fusce eleifend felis ac nisl elementum fermentum non malesuada justo. Sed aliquet tellus odio, eget malesuada elit bibendum luctus. Donec nec ultricies dui. Ut nulla elit, maximus ac ultrices ut, maximus a arcu. In fermentum malesuada felis, id condimentum arcu gravida nec. Morbi leo augue, suscipit ut sagittis nec, feugiat et libero.
                </p>
            </div>
        </section>
    );
}

export default About;