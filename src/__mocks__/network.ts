import Network from "network";
jest.mock("network", () => ({
  ...jest.requireActual("network"),
  get: jest.fn(),
}));

let getMock: jest.Mock | undefined = undefined;
type DataType = any;
type MocksType = { [url: string]: DataType };
function mockGet(mockData: MocksType) {
  getMock = (Network.get as jest.Mock).mockImplementation((url: string) => {
    const data = mockData[url];
    return data
      ? Promise.resolve({ data })
      : Promise.reject(`mock not provided for : ${url}`);
  });
}

function mockGetReset() {
  getMock?.mockReset();
}

const networkMock = {
  get: mockGet,
  getReset: mockGetReset,
};

export default networkMock;
