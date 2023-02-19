import Crossword from '@guardian/react-crossword';

export const CrosswordGame = (props) => {
    const data = {
      id: 'simple/1',
      number: 1,
      name: 'Simple Crossword 1',
      date: 1542326400000,
      entries: [
        {
          id: '1-down',
          number: 1,
          humanNumber: '1',
          clue: 'President of the CSS\'s first name.',
          direction: 'down',
          length: 6,
          group: ['1-down'],
          position: { x: 7, y: 0 },
          separatorLocations: {},
          solution: 'SALMAN',
        },
        {
          id: '2-down',
          number: 2,
          humanNumber: '2',
          clue: 'Computer Scientists\' hate these (rhymes with powers).',
          direction: 'down',
          length: 7,
          group: ['2-down'],
          position: { x: 5, y: 2 },
          separatorLocations: {},
          solution: 'SHOWERS',
        },
        {
          id: '4-down',
          number: 4,
          humanNumber: '4',
          clue: 'An annoyingly loud sport played in MVB\'s atrium',
          direction: 'down',
          length: 8,
          group: ['4-down'],
          position: { x: 8, y: 6 },
          separatorLocations: {},
          solution: 'PINGPONG',
        },
        {
          id: '5-down',
          number: 5,
          humanNumber: '5',
          clue: 'The denary of the binary 10000 in plain English.',
          direction: 'down',
          length: 7,
          group: ['5-down'],
          position: { x: 3, y: 7 },
          separatorLocations: {},
          solution: 'SIXTEEN',
        },
        {
          id: '3-across',
          number: 3,
          humanNumber: '3',
          clue: 'A monoid in the category of endofunctors.',
          direction: 'across',
          length: 5,
          group: ['3-across'],
          position: { x: 4, y: 4 },
          separatorLocations: {},
          solution: 'MONAD',
        },
        {
          id: '5-across',
          number: 5,
          humanNumber: '5',
          clue: 'The thing lecturers keep doing.',
          direction: 'across',
          length: 8,
          group: ['3-across'],
          position: { x: 3, y: 7 },
          separatorLocations: {},
          solution: 'STRIKING',
        },
      ],
      solutionAvailable: true,
      dateSolutionAvailable: 1542326400000,
      dimensions: {
        cols: 14,
        rows: 14,
      },
      crosswordType: 'quick',
    }

    return (
      <div className="crosswordWrapper">
        <Crossword className="crossWord" data={data} />
      </div>
    )
}

// Old date for different crossword library
/*const data = {
  down: {
    1: {
      clue: 'President of the CSS\'s first name.',
      answer: 'SALMAN',
      row: 0,
      col: 4,
    },
    2: {
      clue: 'Computer Scientists\' hate these (rhymes with powers).',
      answer: 'SHOWERS',
      row: 2,
      col: 2,
    },
    4: {
      clue: 'An annoyingly loud sport played in MVB\'s atrium',
      answer: 'PINGPONG',
      row: 6,
      col: 5,
    },
    5: {
      clue: 'The denary of the binary 10000 in plain English.',
      answer: 'SIXTEEN',
      row: 7,
      col: 0,
    },
  },
  across: {
    3: {
      clue: 'A monoid in the category of endofunctors.',
      answer: 'MONAD',
      row: 4,
      col: 1,
    },
    5: {
      clue: 'The thing lecturers keep doing.',
      answer: 'STRIKING',
      row: 7,
      col: 0,
    },
  },
}*/