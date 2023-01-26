import SmallViewBox from '../SmallViewBox';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

const onPressSeeAllBtn = jest.fn();

describe('SmallViewBox', function () {
  beforeEach(() => {
    render(
      <SmallViewBox title="Test title" onSeeAll={onPressSeeAllBtn}>
        <Text>No any data</Text>
      </SmallViewBox>
    );
  });
  test('renders component', () => {
    expect(screen).toMatchSnapshot();
  });

  test('should contain 2 children', function () {
    expect(screen.getByTestId('small-view-box-container').children.length).toBe(
      2
    );
  });

  test('should show the title prop', () => {
    expect(screen.getByTestId('small-view-box-title').children).toEqual([
      'Test title',
    ]);
  });
});
