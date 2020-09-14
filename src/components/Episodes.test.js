import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';
import { episodes } from './episodeData'


test("Renders with new props (Episodes list showslist of episodes when rendered with episode data)", () => {
  //Arrange
  //Act
  //Assert
  const { getAllByTestId, queryAllByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  const emptyRender  = queryAllByTestId(/episode/i);
  expect(emptyRender).toHaveLength(0);
  
  rerender(<Episodes episodes={episodes} />);
  const propsRender = getAllByTestId(/episode/i);
  expect(propsRender).toHaveLength(5);

  //1st Attempt
//   const { rerender } = render(<Episodes episodes={[]} />);
  
//   rerender(<Episodes episodes={episodes}/>)
//   const episodes = screen.getAllByTestId(/episodes/i);
//  expect(episodes).toHaveLength()
})


// LECTURE
// test("Rerenders with new props", () => {
//   const { rerender } = render(<MissionsList missions={[]} />);

//   // rerender with missions data passed in
//   rerender(<MissionsList missions={missionsData} />);

//   // query for the missions that are being rendered
//   // assertions
//   const missionsList = screen.getAllByTestId(/missions/i);

//   expect(missionsList).toHaveLength(3);
// });