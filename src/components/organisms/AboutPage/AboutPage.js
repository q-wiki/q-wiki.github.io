import React from 'react'
import Heading from '../../atoms/Heading/Heading'

import CardMember from '../../molecules/CardMember/CardMember'
import TimeLineItem from '../../atoms/TimeLineItem/TimeLineItem'

const images = [
  '../../../../src/assets/images/member-1.png',
  '../../../../src/assets/images/member-2.png',
  '../../../../src/assets/images/member-3.png',
  '../../../../src/assets/images/member-4.png',
  '../../../../src/assets/images/member-5.png',
  '../../../../src/assets/images/member-6.png',
];

export default function AboutPage() {
  return <>

        <CardMember link="https://github.com/AntoniaBe" backgroundImage={images[5]} headline={'Antonia Berger'} content={'Frontend Developer'}/>



  <div>
  <TimeLineItem
    headline={'The Task'}
    content={'The original group consisted of 6 master Students. As part of our masters program in International Media and Programming at the HTW Berlin, we were tasked to create a game in collaboration with Wikidata. During the summer semester of 2019 we worked several months to realize the project.'}
    />
  <TimeLineItem
    alignmentRight
    headline={'The End of the Beginning'}
    content={'The result at the end of the semester was recieved positively, promising a good foundation onto which new teams could build upon. Not just amongst Wikidata but also from professors at the HTW, which lead to the continuation of the project during the next semester. While the original team mostly returned to the project, we also welcomed 2 new members to help us perfect the game'}
    />
  </div>
  <br></br>
  <br></br>
  </>
}
