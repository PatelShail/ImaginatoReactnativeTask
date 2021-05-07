import {getRequest} from './NetworkManager';
import {UserResponse} from './UserResponse';

class APIRequest {
  // Call the API reference.
  getUsers = (pageNumber: number) => {
    return getRequest<UserResponse>('/api', {
      page: pageNumber,
      results: 10,
    });
  };

  logout = () => null;
}

export default new APIRequest();
