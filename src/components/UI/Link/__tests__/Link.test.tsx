import { fireEvent, render, screen } from '@testing-library/react-native';
import Link from '../Link';

const onPressLinkBtn = jest.fn();

describe('Link', function () {
  beforeEach(() => {
    render(
      <Link isLinkPressedForTest onPress={onPressLinkBtn}>
        Link text
      </Link>
    );
  });

  it('should show text as a child', function () {
    expect(screen.getByTestId('link-btn-text').children).toEqual(['Link text']);
  });

  it('should be clickable', function () {
    fireEvent(screen.getByTestId('link-btn-id'), 'press');
    expect(onPressLinkBtn).toHaveBeenCalled();
  });

  it('should change opacity when clicked', function () {
    expect(screen.getByTestId('link-btn-id').props.style).toMatchObject([
      {
        opacity: 0.7,
      },
    ]);
  });
});
