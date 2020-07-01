import React from 'react';
import './About.css';

export default (props) => {
  let loremIpsum =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat et lectus ut placerat. Donec ultrices vulputate pretium. Nunc sagittis, diam at tincidunt malesuada, sapien risus ultricies magna, a convallis augue mauris consectetur urna. Nullam vel semper lectus, nec scelerisque leo. Maecenas a tristique ex. Sed nec nisl porttitor, varius tellus at, viverra arcu. Fusce pulvinar mauris eu finibus mattis. Integer sed tempor quam, in ultrices orci.

    Morbi molestie faucibus eros a porta. In hac habitasse platea dictumst. Vivamus vitae enim ultrices, mollis tellus vitae, pulvinar libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et ipsum arcu. Morbi sed viverra felis, nec elementum odio. Suspendisse pulvinar, est vel dictum vehicula, massa orci iaculis risus, vel scelerisque nisl ligula ultricies mauris. Cras ac vestibulum ante, consectetur pellentesque erat. Aenean sapien ligula, ultrices nec risus semper, mollis facilisis dui. Donec eu lectus molestie, dictum massa ut, semper eros.

    Proin aliquet nunc vitae neque efficitur, in pretium velit mattis. Sed auctor bibendum orci. Sed ut pharetra ante. Donec consequat et dui ac iaculis. Mauris molestie nulla erat, rutrum aliquam nulla dapibus sit amet. Nullam eu tincidunt leo, a rhoncus justo. Quisque sed viverra ligula. Sed pretium consequat turpis, dignissim iaculis mauris faucibus non. Morbi sollicitudin luctus est id viverra.

    Fusce pharetra lacinia lorem, at rutrum odio aliquet et. Quisque ac metus vitae odio tincidunt malesuada. Mauris nibh nisl, hendrerit sit amet pellentesque sit amet, fermentum eu lectus. Sed eget ipsum ut tellus ullamcorper vehicula. Donec euismod eu ex sit amet dictum. Vivamus vel felis risus. Nulla eros sapien, malesuada at porta ut, efficitur sit amet arcu. Ut rhoncus nunc in tortor dignissim tristique. Sed semper pellentesque augue ac posuere. Curabitur et ante scelerisque, pellentesque metus et, sollicitudin mauris. Vivamus auctor quam id turpis consequat consectetur.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, eros in semper blandit, enim ligula commodo nunc, a scelerisque risus tellus ac est. Morbi egestas sem at leo placerat, id consequat neque placerat. Praesent volutpat purus nibh, quis mollis urna consequat eget. Nulla sed lectus vitae lacus lobortis euismod. Sed at tempor metus. Maecenas dapibus felis a felis interdum, eget tincidunt arcu posuere. Proin dictum leo mauris, eget cursus lorem vestibulum et. Sed hendrerit lectus quis mauris dignissim porttitor. Sed eu odio pellentesque, lobortis quam sed, aliquet tortor. Phasellus nec nulla in arcu fermentum hendrerit. Fusce interdum scelerisque velit sed tincidunt.`

  return (
    <div
      className='about-container'
      >
        {
          loremIpsum
            .match(/^.+$/gim)
            .map(
              (e, i) => (
                <p
                  className='about-p'
                  >
                    {
                      e
                    }
                </p>
              )
            )
        }
    </div>
  )
};
