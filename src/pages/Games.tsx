import React, { useState } from 'react';
import GameListItem from '../components/GameListItem'; // Import GameListItem component
import FullGamePopup from '../components/FullGamePopup'; // Import FullGamePopup component

const Games: React.FC = () => {
  // Sample game data (replace with actual data from your backend)
  const games = [
    {
      title: "The Witcher 3: Wild Hunt",
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: ["RPG"],
      description: "An open-world RPG where players control Geralt of Rivia on his journey to find his adopted daughter.",
      releaseDate: "2015-05-19",
      imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_720p/z5t0yuhyiiui1ickwhgj.webp",
        "https://images.igdb.com/igdb/image/upload/t_720p/em1y2ugcwy2myuhvb9db.webp",
      ],
      trailerUrl: "https://www.youtube.com/watch?v=1-l29HlKkXU&t=6s&ab_channel=TheWitcher",
      reviews: ["One of the best RPGs ever made!", "Masterpiece of story and world-building."]
    },
    {
      title: "God of War (2018)",
      platform: ["PlayStation 4", "PC"],
      genre: ["Action", "Adventure"],
      description: "A reimagined take on the God of War series, following Kratos and his son Atreus on a journey through Norse mythology.",
      releaseDate: "2018-04-20",
      imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp",
      screenshots: [
        "https://cdn.vox-cdn.com/thumbor/fHLaWxLQ6xW4jH5p19L6jV_sjkU=/0x0:4000x2250/1200x800/filters:focal(1617x531:2383x797)/cdn.vox-cdn.com/uploads/chorus_image/image/59291512/godofwar_review_hero_1.0.jpg",
        "https://www.pcgamesn.com/wp-content/uploads/2022/01/god-of-war-pc-review-min-1920x1080.jpg"
      ],
      trailerUrl: "https://www.youtube.com/watch?v=K0u_kAWLJOA",
      reviews: ["An incredible return for the series.", "The bond between Kratos and Atreus is remarkable."]
    },
    {
      title: "Minecraft",
      platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      genre: ["Sandbox", "Survival"],
      description: "A sandbox game that allows players to create and explore blocky, procedurally generated worlds.",
      releaseDate: "2011-11-18",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/GY9n9KywFCHEpsdqaSGj8S-1200-80.jpg",
      screenshots: [
        "https://www.minecraft.net/content/dam/minecraft/commons/blogs/minecraft_earth.png",
        "https://www.minecraft.net/content/dam/minecraft/commons/blogs/bedrock-hero-banner.jpg"
      ],
      trailerUrl: "https://www.youtube.com/embed/GoJ0zF1JYyk",
      reviews: ["A truly innovative game that lets you create anything!", "Has an amazing community."]
    },
    {
      title: "Red Dead Redemption 2",
      platform: ["PC", "PlayStation 4", "Xbox One"],
      genre: ["Action", "Adventure"],
      description: "An epic tale of life in America at the end of the 19th century, following Arthur Morgan and the Van der Linde gang.",
      releaseDate: "2018-10-26",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Red_Dead_Redemption_2_cover_art.jpg",
      screenshots: [
        "https://cdn.wccftech.com/wp-content/uploads/2018/11/RDR2-1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Red_Dead_Redemption_2_map.jpg"
      ],
      trailerUrl: "https://www.youtube.com/embed/r27nKvQec1Q",
      reviews: ["A masterpiece of open-world design.", "Incredible detail and storytelling."]
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      platform: ["Nintendo Switch", "Wii U"],
      genre: ["Action", "Adventure"],
      description: "An open-world action-adventure game set in the land of Hyrule where Link must save Princess Zelda and defeat Calamity Ganon.",
      releaseDate: "2017-03-03",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Legend_of_Zelda_Breath_of_the_Wild_artwork.png/800px-The_Legend_of_Zelda_Breath_of_the_Wild_artwork.png",
      screenshots: [
        "https://www.zelda.com/breath-of-the-wild/img/screenshots/screenshot01.jpg",
        "https://www.zelda.com/breath-of-the-wild/img/screenshots/screenshot02.jpg"
      ],
      trailerUrl: "https://www.youtube.com/embed/zw47_q9wbBE",
      reviews: ["A revolution in open-world gameplay.", "One of the best games ever made."]
    },
    {
      title: "Hades",
      platform: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
      genre: ["Action", "Rogue-like"],
      description: "A rogue-like dungeon crawler where players control Zagreus, the son of Hades, as he attempts to escape the underworld.",
      releaseDate: "2020-09-17",
      imageUrl: "https://static1.square-enix.com/journal/wp-content/uploads/2021/09/14-04.jpg",
      screenshots: [
        "https://www.culturedvultures.com/wp-content/uploads/2021/04/hades-v2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hades_screen_2.png"
      ],
      trailerUrl: "https://www.youtube.com/embed/8pS9gmJHqyg",
      reviews: ["A brilliant mix of action and story.", "Addictive and fun combat mechanics."]
    },
    {
      title: "Fortnite",
      platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      genre: ["Battle Royale", "Shooter"],
      description: "A battle royale game where 100 players fight to be the last one standing, featuring building mechanics and frequent updates.",
      releaseDate: "2017-09-26",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/L7z9Rkfgcmg8scYtV8fnh6-1200-80.jpg",
      screenshots: [
        "https://cdn.mos.cms.futurecdn.net/VHhECJhz5PRhwfy7FsnYp7.jpg",
        "https://www.polygon.com/2019/5/9/18538714/fortnite-vbucks-epic-games-skins-dance-microtransactions"
      ],
      trailerUrl: "https://www.youtube.com/embed/2uA27cD-Jk4",
      reviews: ["Constantly evolving and fun.", "A great social game."]
    },
    {
      title: "Overwatch",
      platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      genre: ["Shooter"],
      description: "A team-based multiplayer first-person shooter, where players control heroes with unique abilities and work to complete objectives.",
      releaseDate: "2016-05-24",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Overwatch_logo.svg/1200px-Overwatch_logo.svg.png",
      screenshots: [
        "https://media.blizzard.com/overwatch/2/1117/OW2-Announce_Social_Tile-Default-en-US-1200x675.jpg",
        "https://www.sideshow.com/storage/product-images/901120/overwatch_2_premium_format_figure-13.jpg"
      ],
      trailerUrl: "https://www.youtube.com/embed/O1k2kebJ2j0",
      reviews: ["Innovative multiplayer gameplay.", "Exciting and dynamic."]
    },
    {
      title: "Among Us",
      platform: ["PC", "Mobile", "Nintendo Switch"],
      genre: ["Party", "Social Deduction"],
      description: "A party game where players work together on a spaceship, but some players are secretly impostors trying to sabotage the crew.",
      releaseDate: "2018-06-15",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Among_Us_Logo.png",
      screenshots: [
        "https://www.cbr.com/wp-content/uploads/2020/10/Among-Us-Screenshot-4.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Among_Us-2020.png"
      ],
      trailerUrl: "https://www.youtube.com/embed/DK_M2DwyMXY",
      reviews: ["A fantastic party game.", "Perfect for playing with friends."]
    }
  ];

  // State for the filters and search term
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filtered games based on the selected platform, genre, and search term
  const filteredGames = games.filter((game) => {
    const matchesPlatform = selectedPlatform ? game.platform.includes(selectedPlatform) : true;
    const matchesGenre = selectedGenre ? game.genre.includes(selectedGenre) : true;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPlatform && matchesGenre && matchesSearch;
  });

  // Modal state for full game details
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);

  // Action Handlers
  const handleViewDetails = (game: any) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleEdit = () => {
    alert("Edit functionality will go here!");
  };

  const handleRemove = () => {
    alert("Remove functionality will go here!");
  };

  // Handle Add Game button click
  const handleAddGame = () => {
    alert("Add new game functionality will go here!");
  };

  return (
    <div className="bg-gray-50">
      {/* Main Section */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for a game..."
                className="px-4 py-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-4 ml-8">
              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setSelectedPlatform(e.target.value)}
                value={selectedPlatform}
              >
                <option value="">All Platforms</option>
                <option value="Steam">Steam</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
              </select>

              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setSelectedGenre(e.target.value)}
                value={selectedGenre}
              >
                <option value="">All Genres</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
              </select>
            </div>

            <button
              onClick={handleAddGame}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Add Game
            </button>
          </div>

          {/* Game List */}
          <div className="space-y-8">
            {filteredGames.map((game) => (
              <GameListItem
                key={game.title}
                game={game}
                onViewDetails={() => handleViewDetails(game)}
                onEdit={handleEdit}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Full Game Info Modal */}
      {showModal && selectedGame && (
        <FullGamePopup game={selectedGame} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Games;
