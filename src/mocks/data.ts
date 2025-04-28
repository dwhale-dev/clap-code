import { ApiResponse, Result } from "../types";

const maleFirstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Paul",
  "Andrew",
  "Joshua",
];

const femaleFirstNames = [
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Elizabeth",
  "Barbara",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Nancy",
  "Lisa",
  "Margaret",
  "Betty",
  "Sandra",
  "Ashley",
  "Kimberly",
  "Emily",
  "Donna",
  "Michelle",
];

const generateRandomUUID = () => {
  return crypto.randomUUID();
};

const getRandomName = (names: string[], index: number) => {
  const name = names[index % names.length];
  return `${name}${index + 1}`;
};

const sampleResultMale: Result = {
  gender: "male",
  name: { title: "Mr", first: "John", last: "Doe" },
  location: {
    street: { number: 123, name: "Main Street" },
    city: "New York",
    state: "NY",
    country: "USA",
    postcode: 10001,
    coordinates: { latitude: "40.7128", longitude: "-74.0060" },
    timezone: { offset: "-5:00", description: "Eastern Time (US & Canada)" },
  },
  email: "johndoe@example.com",
  login: {
    uuid: "uuid-male-1",
    username: "johndoe",
    password: "password123",
    salt: "salt",
    md5: "md5",
    sha1: "sha1",
    sha256: "sha256",
  },
  dob: { date: "1990-01-01T00:00:00.000Z", age: 34 },
  registered: { date: "2010-01-01T00:00:00.000Z", age: 14 },
  phone: "123-456-7890",
  cell: "987-654-3210",
  id: { name: "SSN", value: "123-45-6789" },
  picture: {
    large: "https://randomuser.me/api/portraits/men/1.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
  },
  nat: "US",
};

const sampleResultFemale: Result = {
  gender: "female",
  name: { title: "Ms", first: "Jane", last: "Doe" },
  location: {
    street: { number: 456, name: "Second Street" },
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    postcode: 90001,
    coordinates: { latitude: "34.0522", longitude: "-118.2437" },
    timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" },
  },
  email: "janedoe@example.com",
  login: {
    uuid: "uuid-female-1",
    username: "janedoe",
    password: "password123",
    salt: "salt",
    md5: "md5",
    sha1: "sha1",
    sha256: "sha256",
  },
  dob: { date: "1992-02-02T00:00:00.000Z", age: 32 },
  registered: { date: "2012-02-02T00:00:00.000Z", age: 12 },
  phone: "321-654-0987",
  cell: "789-012-3456",
  id: { name: "SSN", value: "987-65-4321" },
  picture: {
    large: "https://randomuser.me/api/portraits/women/1.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
  },
  nat: "US",
};

const maleResults = Array.from({ length: 80 }, (_, index) => {
  const firstName = getRandomName(maleFirstNames, index);
  return {
    ...sampleResultMale,
    login: {
      ...sampleResultMale.login,
      uuid: generateRandomUUID(),
      username: `user_male_${index + 1}`,
    },
    email: `${firstName.toLowerCase()}@example.com`,
    name: { ...sampleResultMale.name, first: firstName },
  };
});

const femaleResults = Array.from({ length: 80 }, (_, index) => {
  const firstName = getRandomName(femaleFirstNames, index);
  return {
    ...sampleResultFemale,
    login: {
      ...sampleResultFemale.login,
      uuid: generateRandomUUID(),
      username: `user_female_${index + 1}`,
    },
    email: `${firstName.toLowerCase()}@example.com`,
    name: { ...sampleResultFemale.name, first: firstName },
  };
});

const apiResponse: ApiResponse = {
  results: [...maleResults, ...femaleResults],
  info: {
    seed: "example-seed",
    results: 160,
    page: 1,
    version: "1.0",
  },
};

export default apiResponse;
