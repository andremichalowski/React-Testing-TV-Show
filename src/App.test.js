
import React from 'react';
import { mockData } from './fixtures/show';

import { render, wait, fireEvent, act, screen, queryByTestId, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');

jest.mock("react-dropdown", () => ({ options, value, onChange }) => {
    function handleChange(event) {
      const option = options.find(
        (option) => option.value === event.currentTarget.value
      );
      onChange(option);
    }
    return (
      <select data-testid="dropdown" value={value} onChange={handleChange}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  });

test('loads show data', async () => {
    mockFetchShow.mockResolvedValueOnce({data: mockData});

    const { queryAllByTestId, queryAllByText, getByText } = render(<App/>);

    expect(queryAllByTestId('show')).toHaveLength(0);

    // expect(screen.queryAllByText(/select a season/i)).toBeInTheDocument();
    // fireEvent.click(screen.getByText(/select a season/i));
    // fireEvent.click(screen.getByText(/season 2/i))
    // expect(screen.getByText('Season 2, Episode 2')).toBeInTheDocument();

    const dropdown = queryAllByTestId('dropdown');

    dropdown.value = 'Season 1';

    expect(dropdown.value).toBe('Season 1')

    await waitFor(() => { expect(queryAllByText('Season 1')).toBeTruthy()})

    // const option = screen.queryAllByText(/season 2/i);


    // expect(option).toBeTruthy()
    // fireEvent.click(screen.getByText(/season 1/i))'.

    // expect(queryAllByTestId('show')).toHaveLength(2);

    // expect(queryByText(/season 3/i));
})















// import React from "react";
// import userEvent from "@testing-library/user-event";
// import { render, waitFor } from "@testing-library/react";
// import {fetchShow as mockFetchShow } from "./api/fetchShow";

// import App from "./App";

// const episodes = {
//   data: {
//     id: 2993,
//     url: "http://www.tvmaze.com/shows/2993/stranger-things",
//     name: "Stranger Things",
//     type: "Scripted",
//     language: "English",
//     genres: ["Drama", "Fantasy", "Science-Fiction"],
//     status: "Running",
//     runtime: 60,
//     premiered: "2016-07-15",
//     officialSite: "https://www.netflix.com/title/80057281",
//     schedule: {
//       time: "",
//       days: ["Thursday"],
//     },
//     rating: {
//       average: 8.7,
//     },
//     weight: 98,
//     network: null,
//     webChannel: {
//       id: 1,
//       name: "Netflix",
//       country: null,
//     },
//     externals: {
//       tvrage: 48493,
//       thetvdb: 305288,
//       imdb: "tt4574334",
//     },
//     image: {
//       medium:
//         "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
//       original:
//         "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
//     },
//     summary:
//       "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
//     updated: 1597745578,
//     _links: {
//       self: {
//         href: "http://api.tvmaze.com/shows/2993",
//       },
//       previousepisode: {
//         href: "http://api.tvmaze.com/episodes/1576476",
//       },
//     },
//     _embedded: {
//       episodes: [
//         {
//           id: 553946,
//           url:
//             "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
//           name: "Chapter One: The Vanishing of Will Byers",
//           season: 1,
//           number: 1,
//           airdate: "2016-07-15",
//           airtime: "",
//           airstamp: "2016-07-15T12:00:00+00:00",
//           runtime: 60,
//           image: {
//             medium:
//               "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
//             original:
//               "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
//           },
//           summary:
//             "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
//           _links: {
//             self: {
//               href: "http://api.tvmaze.com/episodes/553946",
//             },
//           },
//         },
//         {
//           id: 1752754,
//           url:
//             "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
//           name: "Chapter One: The Hellfire Club",
//           season: 4,
//           number: 1,
//           airdate: "",
//           airtime: "",
//           airstamp: null,
//           runtime: 60,
//           image: null,
//           summary: null,
//           _links: {
//             self: {
//               href: "http://api.tvmaze.com/episodes/1752754",
//             },
//           },
//         },
//       ],
//     },
//   },
// };

// jest.mock("./api/fetchShow");

// console.log(mockFetchShow);

// test("Application will get episode data from the API and display it", async () => {
//   // Arrange
//   mockFetchShow.mockResolvedValueOnce(episodes);
//   const { getByText } = render(<App />);

  // await waitFor(() => {
  //   getByText(/select a season/i);
  // });

  // // Act
  // userEvent.click(getByText(/select a season/i));

  // await waitFor(() => {
  //   getByText(/season 1/i);
  // });

  // userEvent.click(getByText(/season 1/i));

  // await waitFor(() => {
  //   getByText(/chapter one: the vanishing of will byers/i);
  // });

  // // Assert
  // expect(getByText(/chapter one: the vanishing of will byers/i)).toBeTruthy();
  // expect(mockFetchShow).toHaveBeenCalledTimes(1);
});



// // test('render season image on page with alt text from mock object', async() => {
//   mockFetchShow.mockResolvedValueOnce(mockObject);
//   render (<App/>);
//   expect(await screen.findByAltText(mockObject.name)).toBeInTheDocument();
// });