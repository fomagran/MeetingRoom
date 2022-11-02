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
    introduce: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Khalid',
    profileImage: USERS_IMAGE_URL['Khalid'],
    role: 'Fullstack Engineer',
    type: 'Engineer',
    introduce: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  },
  {
    name: 'Beenzino',
    profileImage: USERS_IMAGE_URL['Beenzino'],
    role: 'Android Engineer',
    type: 'Engineer',
    introduce: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
  },
  {
    name: 'JayZ',
    profileImage: USERS_IMAGE_URL['JayZ'],
    role: 'iOS Engineer',
    type: 'Engineer',
    introduce: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  },
  {
    name: 'ChanceTheRapper',
    profileImage: USERS_IMAGE_URL['ChanceTheRapper'],
    role: 'Backend Engineer',
    type: 'Engineer',
    introduce: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  },
  {
    name: 'Future',
    profileImage: USERS_IMAGE_URL['Future'],
    role: 'Frontend Engineer',
    type: 'Engineer',
    introduce: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  },
  {
    name: 'Dababy',
    profileImage: USERS_IMAGE_URL['Dababy'],
    role: 'HR Manager',
    type: 'Manager',
    introduce: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. '
  },
  {
    name: 'Eminem',
    profileImage: USERS_IMAGE_URL['Eminem'],
    role: 'Sales Engineer',
    type: 'Manager',
    introduce: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. '
  },
  {
    name: 'Drake',
    profileImage: USERS_IMAGE_URL['Drake'],
    role: 'Marketing Engineer',
    type: 'Manager',
    introduce: ' But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
  },
  {
    name: 'TomHardy',
    profileImage: USERS_IMAGE_URL['TomHardy'],
    role: 'Product Designer',
    type: 'Designer',
    introduce: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
  },
  {
    name: 'TatianaManaois',
    profileImage: USERS_IMAGE_URL['TatianaManaois'],
    role: 'Graphick Designer',
    type: 'Designer',
    introduce: 'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.'
  },
  {
    name: 'MacMiller',
    profileImage: USERS_IMAGE_URL['MacMiller'],
    role: 'UX Designer',
    type: 'Designer',
    introduce: 'Today it\'s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.'
  },
  {
    name: 'KanyeWest',
    profileImage: USERS_IMAGE_URL['KanyeWest'],
    role: 'UI Designer',
    type: 'Designer',
    introduce: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.'
  },
];