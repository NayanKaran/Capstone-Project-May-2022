function showMobileMenu() {
  if (document.body.scrollWidth >= 768) {
    return;
  }
  document.getElementById('mobile-menu').style.display = 'block';
}

function hideMobileMenu() {
  document.getElementById('mobile-menu').style.display = 'none';
}

document.getElementById('nav').addEventListener('click', showMobileMenu);
document
  .querySelector('#mobile-menu > a')
  .addEventListener('click', hideMobileMenu);

const speakers = [
  {
    image_url: './images/profile-pic-yochai.png',
    name: 'Yochai Benkler',
    designation:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    introduction:
      'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    image_url: './images/profile-pic-kilnam.png',
    name: 'Kilnam Chon',
    designation: '',
    introduction:
      "Kiinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural dass of the Internet Society's (ISOO Internet Hall of Fame.",
  },
  {
    image_url: './images/profile-pic-sohyeong.png',
    name: 'SohYeong Noh',
    designation: 'Director of Art Centre Nabi and a board member of CC Korea',
    introduction:
      'Julia Leda President of Young Pirates of Europe As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image_url: './images/profile-pic-julia.png',
    name: 'Julia Leda',
    designation: 'President of Young Pirates of Europe',
    introduction:
      "European ingetration, political democracy and participation of youth through online as her major condern Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    image_url: './images/profile-pic-lila.png',
    name: 'Lila Tretikov',
    designation: 'Executive Director of the Wikimedia Foundation',
    introduction:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month.',
  },
  {
    image_url: './images/profile-pic-ryan.png',
    name: 'Ryan Merkley',
    designation: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    introduction:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

const featuredSpeakerSection = document.createElement('section');
featuredSpeakerSection.id = 'featured-speakers';
{
  const featuredSpeakerHeading = document.createElement('h2');
  featuredSpeakerHeading.innerText = 'Featured Speakers';
  featuredSpeakerSection.appendChild(featuredSpeakerHeading);
}
{
  const featuredSpeakerLineSeperator = document.createElement('hr');
  featuredSpeakerSection.appendChild(featuredSpeakerLineSeperator);
}
{
  const featuredSpeakerList = document.createElement('ul');
  featuredSpeakerList.id = 'featured-speakers-list';
  for (let i = 0; i < speakers.length; i += 1) {
    const featuredSpeakerListItem = document.createElement('li');
    {
      const featuredSpeakerImage = document.createElement('img');
      featuredSpeakerImage.alt = 'display picture';
      featuredSpeakerImage.src = speakers[i].image_url;
      featuredSpeakerListItem.appendChild(featuredSpeakerImage);
    }
    {
      const featuredSpeakerInfo = document.createElement('div');
      {
        const featuredSpeakerName = document.createElement('h3');
        featuredSpeakerName.innerText = speakers[i].name;
        featuredSpeakerInfo.appendChild(featuredSpeakerName);
      }
      {
        const featuredSpeakerDesignation = document.createElement('h4');
        featuredSpeakerDesignation.innerText = speakers[i].designation;
        featuredSpeakerInfo.appendChild(featuredSpeakerDesignation);
      }
      {
        const featuredSpeakerSeperator = document.createElement('hr');
        featuredSpeakerInfo.appendChild(featuredSpeakerSeperator);
      }
      {
        const featuredSpeakerIntroduction = document.createElement('p');
        featuredSpeakerIntroduction.innerText = speakers[i].introduction;
        featuredSpeakerInfo.appendChild(featuredSpeakerIntroduction);
      }
      featuredSpeakerListItem.appendChild(featuredSpeakerInfo);
    }
    featuredSpeakerList.appendChild(featuredSpeakerListItem);
  }
  featuredSpeakerSection.appendChild(featuredSpeakerList);
}

document.querySelector('body > main').insertBefore(
  featuredSpeakerSection,
  document.getElementById('partner'),
);
