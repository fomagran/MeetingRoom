interface Dictionary {
  [key: string]: string;
}

export const BASE_URL = 'http://192.168.111.34:3001';
export const USERS_IMAGE_URL: Dictionary = {
  Beenzino:
    'https://user-images.githubusercontent.com/47676921/184252230-a912f918-f5ac-4764-98f4-268c571f0793.jpg',
  Khalid:
    'https://user-images.githubusercontent.com/47676921/184225841-398db1c2-8c60-4223-8dbc-0e8f8892934d.jpg',
  Fomagran:
    'https://user-images.githubusercontent.com/47676921/184225834-21439481-c2e6-43f3-b09c-99d32e88368a.jpg',
  MacMiller:
    'https://user-images.githubusercontent.com/47676921/186968040-8e2ab134-378c-4e51-a63e-594016678356.jpg',
  KanyeWest:
    'https://user-images.githubusercontent.com/47676921/187486191-f7b8c9ad-dde4-448d-91a0-37b0746ec6aa.jpg',
  DominicFike:
    'https://user-images.githubusercontent.com/47676921/187486193-c6e4aa25-4dee-4b3e-abd4-0fdf72e5b1f0.jpg',
  Future:
    'https://user-images.githubusercontent.com/47676921/187486192-584763bc-211e-4690-994a-3a87963aa068.jpg',
  Dababy:
    'https://user-images.githubusercontent.com/47676921/187486190-42af431c-116b-42cd-8684-831a13560693.jpeg',
  Drake:
    'https://user-images.githubusercontent.com/47676921/187486189-3388fee8-d0eb-4aee-8c5f-a18b28c24242.jpg',
  JayZ: 'https://user-images.githubusercontent.com/47676921/187486186-5b05d935-a06e-468f-8a20-303b4fc9fbc6.jpg',
  Eminem:
    'https://user-images.githubusercontent.com/47676921/187486184-1e6ef077-1d41-4b1a-b213-ca1908691c06.jpg',
  ChanceTheRapper:
    'https://user-images.githubusercontent.com/47676921/187486183-526a602e-276b-4dbe-bc8b-c917905780f7.jpg',
  TomHardy:
    'https://user-images.githubusercontent.com/47676921/187486182-4a674d0c-2e7e-4e40-9abe-15fec39697f0.jpg',
  TatianaManaois:
    'https://user-images.githubusercontent.com/47676921/187486181-790000a4-4c71-4539-a253-7a4968c38d8f.jpg',
};

export const MOCK_USER_DATA = [
  {
    name: 'Fomagran',
    profileImage: USERS_IMAGE_URL['Fomagran'],
    role: 'Software Engineer',
    type: 'Engineer',
  },
  {
    name: 'Khalid',
    profileImage: USERS_IMAGE_URL['Khalid'],
    role: 'Fullstack Engineer',
    type: 'Engineer',
  },
  {
    name: 'Beenzino',
    profileImage: USERS_IMAGE_URL['Beenzino'],
    role: 'Android Engineer',
    type: 'Engineer',
  },
  {
    name: 'JayZ',
    profileImage: USERS_IMAGE_URL['JayZ'],
    role: 'iOS Engineer',
    type: 'Engineer',
  },
  {
    name: 'ChanceTheRapper',
    profileImage: USERS_IMAGE_URL['ChanceTheRapper'],
    role: 'Backend Engineer',
    type: 'Engineer',
  },
  {
    name: 'Future',
    profileImage: USERS_IMAGE_URL['Future'],
    role: 'Frontend Engineer',
    type: 'Engineer',
  },
  {
    name: 'Dababy',
    profileImage: USERS_IMAGE_URL['Dababy'],
    role: 'HR Manager',
    type: 'Manager',
  },
  {
    name: 'Eminem',
    profileImage: USERS_IMAGE_URL['Eminem'],
    role: 'Sales Engineer',
    type: 'Manager',
  },
  {
    name: 'Drake',
    profileImage: USERS_IMAGE_URL['Drake'],
    role: 'Marketing Engineer',
    type: 'Manager',
  },
  {
    name: 'TomHardy',
    profileImage: USERS_IMAGE_URL['TomHardy'],
    role: 'Product Designer',
    type: 'Designer',
  },
  {
    name: 'TatianaManaois',
    profileImage: USERS_IMAGE_URL['TatianaManaois'],
    role: 'Graphick Designer',
    type: 'Designer',
  },
  {
    name: 'MacMiller',
    profileImage: USERS_IMAGE_URL['MacMiller'],
    role: 'UX Designer',
    type: 'Designer',
  },
  {
    name: 'KanyeWest',
    profileImage: USERS_IMAGE_URL['KanyeWest'],
    role: 'UI Designer',
    type: 'Designer',
  },
];