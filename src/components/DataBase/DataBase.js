const updateSkills = (skill1, skill2, skill3) => `
<li class="tech__type">${skill1}</li>
<li class="tech__type">${skill2}</li>
<li class="tech__type">${skill3}</li>
`;

const createProfile = (project, role, year) => `
<p class="range__canopy">${project}</p>
<div class="range__circle"></div>
<p class="range__txt">${role}</p>
<div class="range__circle"></div>
<p class="range__txt">${year}</p>
`;

const modals = [{
  modalId: 'con-1',
  name: 'Tonic',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: '../images/SnapshootPortfolio.png',
  order: 'order--one',
  imageOneDesktop: '../images/Card-images/SnapshootPortfolioDesktop1.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-2',
  name: 'Multi-Post Stories',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and ",
  imageOneMobile: './images/SnapshootPortfolio(1).png',
  order: 'order--two',
  imageOneDesktop: '../images/Card-images/SnapshootPortfolioDesktop2.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-3',
  name: 'Facebook 360',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: './images/SnapshootPortfolio(2).png',
  order: 'order--one',
  imageOneDesktop: '../images/Card-images/SnapshootPortfolioDesktop3.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-4',
  name: 'Uber Navigation',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: './images/SnapshootPortfolio(3).png',
  order: 'order--two',
  imageOneDesktop: '../images/Card-images/SnapshootPortfolioDesktop4.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
  }];

export default modals;