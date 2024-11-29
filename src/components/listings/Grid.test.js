import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
    test('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });

    test('Number of items greater than or equal to 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });

})



const dataTest = data[0].title;

describe('String tests', () => {
    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });
    
    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });
})

//Arrays & Objects

const data2 = ['React Native', 'React'];

describe('Arrays and Objects test', () => {
    test('The list of courses React Native and React', () => {
        expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
    })

    test('The first course to have a property title', () => {
        expect(data[0]).toHaveProperty('title');
    });

    test('The first course to have a property title and vakue of 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    });
})

