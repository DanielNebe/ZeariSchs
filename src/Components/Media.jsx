import React, {useState} from 'react';
import './ComponentsA.css';

const items = [
  { id: 13, type: 'image', src: ''},
  { id: 23, type: 'image', src: ''},
  { id: 33, type: 'video', src: ''},
  { id: 43, type: 'video', src: ''}
];

export default function Media() {
const [filter, setFilter] = useState('all');

const filteredItems = items.filter((item) => filter === 'all' || item.type === filter);
  return (
    <>
    <div className='media-filter-container'>
    < div className="filter-buttons">
      < button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      < button onClick={() => setFilter('image')} className={filter === 'image' ? 'active' : ''}>Images</button>
      < button onClick={() => setFilter('video')} className={filter === 'video' ? 'active' : ''}>Videos</button>
    </div>
      <div className="media-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="media-item">
              {item.type === 'image' ? (
                < img src={item.src} alt={`Media ${item.id}`} />
              ) : (
                <video src={item.src} controls />
              )}
            </div>
          ))}
      </div>
    </div>     
    </> 
  )
}
