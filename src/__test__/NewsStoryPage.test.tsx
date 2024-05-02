import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { NewsStoryPage } from '../components/NewsStoryPage/NewsStoryPage';

test('this function called one', () => {
    const onClick = jest.fn();
    render(
        <Provider store={store}>
            <NewsStoryPage />
        </Provider>
    );
    fireEvent.click(screen.getByText('Назад к списку новостей'));
    expect(onClick).toHaveBeenCalledTimes(1);
});
