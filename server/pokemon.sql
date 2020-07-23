-- Table: pokemon
DROP TABLE IF EXISTS pokemon
CASCADE;
CREATE TABLE pokemon
(
	id INTEGER NOT NULL,
	identifier VARCHAR(79) NOT NULL,
	species_id INTEGER,
	height INTEGER NOT NULL,
	weight INTEGER NOT NULL,
	base_experience INTEGER NOT NULL,
	ordre INTEGER NOT NULL,
	is_default INTEGER NOT NULL,
	type_1 INTEGER NOT NULL,
	type_2 INTEGER,
	abilities VARCHAR(20),
	picture VARCHAR(100),
	PRIMARY KEY (id),
	-- FOREIGN KEY(species_id) REFERENCES pokemon_species (id), 
	CHECK (is_default IN (0, 1))
);
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1, type_2,abilities, picture)
VALUES
	(1, 'bulbasaur', 1, 7, 69, 64, 1, 1, 12, 4, '65,34','https://i.imgur.com/AC2fTGA.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2,abilities, picture)
VALUES
	(2, 'ivysaur', 2, 10, 130, 142, 2, 1, 12, 4,'65,34', 'https://i.imgur.com/zMhNq2e.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2,abilities, picture)
VALUES
	(3, 'venusaur', 3, 20, 1000, 236, 3, 1, 12, 4, '65,34','https://i.imgur.com/gTFqKHD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(4, 'charmander', 4, 6, 85, 62, 5, 1, 10, null, 'https://i.imgur.com/ijpe5sW.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(5, 'charmeleon', 5, 11, 190, 142, 6, 1, 10, null, 'https://i.imgur.com/f7X1kC3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(6, 'charizard', 6, 17, 905, 240, 7, 1, 10, null, 'https://i.imgur.com/Lsf1vta.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(7, 'squirtle', 7, 5, 90, 63, 10, 1, 11, null, 'https://i.imgur.com/48bYjC2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(8, 'wartortle', 8, 10, 225, 142, 11, 1, 11, null, 'https://i.imgur.com/8GhwLbp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(9, 'blastoise', 9, 16, 855, 239, 12, 1, 11, null, 'https://i.imgur.com/uAUZH1q.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(10, 'caterpie', 10, 3, 29, 39, 14, 1, 7, null, 'https://i.imgur.com/LLIlmBS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(11, 'metapod', 11, 7, 99, 72, 15, 1, 7, null, 'https://i.imgur.com/ec5wEjk.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(12, 'butterfree', 12, 11, 320, 178, 16, 1, 7, null, 'https://i.imgur.com/xhj4Egw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(13, 'weedle', 13, 3, 32, 39, 17, 1, 7, 4, 'https://i.imgur.com/lizwwTH.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(14, 'kakuna', 14, 6, 100, 72, 18, 1, 7, 4, 'https://i.imgur.com/qEjBqD9.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(15, 'beedrill', 15, 10, 295, 178, 19, 1, 7, 4, 'https://i.imgur.com/wZ5U3Wv.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(16, 'pidgey', 16, 3, 18, 50, 21, 1, 1, 3, 'https://i.imgur.com/fc3ZrV4.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(17, 'pidgeotto', 17, 11, 300, 122, 22, 1, 1, 3, 'https://i.imgur.com/8bmu48X.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(18, 'pidgeot', 18, 15, 395, 216, 23, 1, 1, 3, 'https://i.imgur.com/VspZHYz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(19, 'rattata', 19, 3, 35, 51, 25, 1, 1, null, 'https://i.imgur.com/gUzOx6s.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(20, 'raticate', 20, 7, 185, 145, 27, 1, 1, null, 'https://i.imgur.com/cS0lMda.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(21, 'spearow', 21, 3, 20, 52, 30, 1, 1, 3, 'https://i.imgur.com/a6l9rm7.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(22, 'fearow', 22, 12, 380, 155, 31, 1, 1, 3, 'https://i.imgur.com/2Qy8hwP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(23, 'ekans', 23, 20, 69, 58, 32, 1, 4, null, 'https://i.imgur.com/AwUxfY1.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(24, 'arbok', 24, 35, 650, 157, 33, 1, 4, null, 'https://i.imgur.com/e0fcrod.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(25, 'pikachu', 25, 4, 60, 112, 35, 1, 13, null, 'https://i.imgur.com/LMvX3zC.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(26, 'raichu', 26, 8, 300, 218, 49, 1, 13, null, 'https://i.imgur.com/thjkDSg.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(27, 'sandshrew', 27, 6, 120, 60, 51, 1, 5, null, 'https://i.imgur.com/PO69vIb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(28, 'sandslash', 28, 10, 295, 158, 53, 1, 5, null, 'https://i.imgur.com/3XfBEuB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(29, 'nidoran-f', 29, 4, 70, 55, 55, 1, 4, null, 'https://i.imgur.com/RZh08KT.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(30, 'nidorina', 30, 8, 200, 128, 56, 1, 4, null, 'https://i.imgur.com/BEbUiAe.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(31, 'nidoqueen', 31, 13, 600, 227, 57, 1, 4, 5, 'https://i.imgur.com/LCFuwn2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(32, 'nidoran-m', 32, 5, 90, 55, 58, 1, 4, null, 'https://i.imgur.com/6A5SeKp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(33, 'nidorino', 33, 9, 195, 128, 59, 1, 4, null, 'https://i.imgur.com/ywqlthV.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(34, 'nidoking', 34, 14, 620, 227, 60, 1, 4, 5, 'https://i.imgur.com/kgZ7ETM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(35, 'clefairy', 35, 6, 75, 113, 62, 1, 18, null, 'https://i.imgur.com/pSyVoxK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(36, 'clefable', 36, 13, 400, 217, 63, 1, 18, null, 'https://i.imgur.com/1gCxuNn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(37, 'vulpix', 37, 6, 99, 60, 64, 1, 10, null, 'https://i.imgur.com/9y8Sxpo.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(38, 'ninetales', 38, 11, 199, 177, 66, 1, 10, null, 'https://i.imgur.com/GVtEYcD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(39, 'jigglypuff', 39, 5, 55, 95, 69, 1, 1, 18, 'https://i.imgur.com/T7raEfY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(40, 'wigglytuff', 40, 10, 120, 196, 70, 1, 1, 18, 'https://i.imgur.com/q9OdNYn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(41, 'zubat', 41, 8, 75, 49, 71, 1, 4, 3, 'https://i.imgur.com/RsQeBo0.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(42, 'golbat', 42, 16, 550, 159, 72, 1, 4, 3, 'https://i.imgur.com/lojCqnw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(43, 'oddish', 43, 5, 54, 64, 74, 1, 12, 4, 'https://i.imgur.com/USfQEGN.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(44, 'gloom', 44, 8, 86, 138, 75, 1, 12, 4, 'https://i.imgur.com/26bh3Ei.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(45, 'vileplume', 45, 12, 186, 221, 76, 1, 12, 4, 'https://i.imgur.com/LEDxhVm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(46, 'paras', 46, 3, 54, 57, 78, 1, 7, 12, 'https://i.imgur.com/p4aTBhN.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(47, 'parasect', 47, 10, 295, 142, 79, 1, 7, 12, 'https://i.imgur.com/xZqlYVB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(48, 'venonat', 48, 10, 300, 61, 80, 1, 7, 4, 'https://i.imgur.com/pIYnSEY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(49, 'venomoth', 49, 15, 125, 158, 81, 1, 7, 4, 'https://i.imgur.com/YU3xemy.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(50, 'diglett', 50, 2, 8, 53, 82, 1, 5, null, 'https://i.imgur.com/iNcsUzy.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(51, 'dugtrio', 51, 7, 333, 149, 84, 1, 5, null, 'https://i.imgur.com/EeGsT5b.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(52, 'meowth', 52, 4, 42, 58, 86, 1, 1, null, 'https://i.imgur.com/HjYq1tC.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(53, 'persian', 53, 10, 320, 154, 88, 1, 1, null, 'https://i.imgur.com/jJyfC4f.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(54, 'psyduck', 54, 8, 196, 64, 90, 1, 11, null, 'https://i.imgur.com/b0n9ccR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(55, 'golduck', 55, 17, 766, 175, 91, 1, 11, null, 'https://i.imgur.com/gXysg8U.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(56, 'mankey', 56, 5, 280, 61, 92, 1, 2, null, 'https://i.imgur.com/hDpIAZZ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(57, 'primeape', 57, 10, 320, 159, 93, 1, 2, null, 'https://i.imgur.com/lNetyrR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(58, 'growlithe', 58, 7, 190, 70, 94, 1, 10, null, 'https://i.imgur.com/xles7PM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(59, 'arcanine', 59, 19, 1550, 194, 95, 1, 10, null, 'https://i.imgur.com/x7NrcVh.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(60, 'poliwag', 60, 6, 124, 60, 96, 1, 11, null, 'https://i.imgur.com/59cc2v3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(61, 'poliwhirl', 61, 10, 200, 135, 97, 1, 11, null, 'https://i.imgur.com/rh6XwnK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(62, 'poliwrath', 62, 13, 540, 230, 98, 1, 11, 2, 'https://i.imgur.com/WS8Hvmp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(63, 'abra', 63, 9, 195, 62, 100, 1, 14, null, 'https://i.imgur.com/7r8Yc43.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(64, 'kadabra', 64, 13, 565, 140, 101, 1, 14, null, 'https://i.imgur.com/fThNWv7.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(65, 'alakazam', 65, 15, 480, 225, 102, 1, 14, null, 'https://i.imgur.com/VDYW1rn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(66, 'machop', 66, 8, 195, 61, 104, 1, 2, null, 'https://i.imgur.com/JoPIaLn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(67, 'machoke', 67, 15, 705, 142, 105, 1, 2, null, 'https://i.imgur.com/ZM3deCi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(68, 'machamp', 68, 16, 1300, 227, 106, 1, 2, null, 'https://i.imgur.com/h6MNKhz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(69, 'bellsprout', 69, 7, 40, 60, 107, 1, 12, 4, 'https://i.imgur.com/wmpNwck.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(70, 'weepinbell', 70, 10, 64, 137, 108, 1, 12, 4, 'https://i.imgur.com/2sVY3gp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(71, 'victreebel', 71, 17, 155, 221, 109, 1, 12, 4, 'https://i.imgur.com/GhvwZ2m.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(72, 'tentacool', 72, 9, 455, 67, 110, 1, 11, 4, 'https://i.imgur.com/zGWFXMS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(73, 'tentacruel', 73, 16, 550, 180, 111, 1, 11, 4, 'https://i.imgur.com/dYUaOAg.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(74, 'geodude', 74, 4, 200, 60, 112, 1, 6, 5, 'https://i.imgur.com/fLFVZQH.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(75, 'graveler', 75, 10, 1050, 137, 114, 1, 6, 5, 'https://i.imgur.com/vJ9xp40.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(76, 'golem', 76, 14, 3000, 223, 116, 1, 6, 5, 'https://i.imgur.com/Shj8rUM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(77, 'ponyta', 77, 10, 300, 82, 118, 1, 10, null, 'https://i.imgur.com/aSGlDvL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(78, 'rapidash', 78, 17, 950, 175, 119, 1, 10, null, 'https://i.imgur.com/ZvPGlxf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(79, 'slowpoke', 79, 12, 360, 63, 120, 1, 11, 14, 'https://i.imgur.com/EvyuPqb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(80, 'slowbro', 80, 16, 785, 172, 121, 1, 11, 14, 'https://i.imgur.com/3a27JWi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(81, 'magnemite', 81, 3, 60, 65, 124, 1, 13, 9, 'https://i.imgur.com/nzqrWDT.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(82, 'magneton', 82, 10, 600, 163, 125, 1, 13, 9, 'https://i.imgur.com/p4wUgaN.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(83, 'farfetchd', 83, 8, 150, 132, 127, 1, 1, 3, 'https://i.imgur.com/w85X8wL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(84, 'doduo', 84, 14, 392, 62, 128, 1, 1, 3, 'https://i.imgur.com/9okePJi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(85, 'dodrio', 85, 18, 852, 165, 129, 1, 1, 3, 'https://i.imgur.com/nZXMjbm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(86, 'seel', 86, 11, 900, 65, 130, 1, 11, null, 'https://i.imgur.com/RUSPUXY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(87, 'dewgong', 87, 17, 1200, 166, 131, 1, 11, 15, 'https://i.imgur.com/57ilpDB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(88, 'grimer', 88, 9, 300, 65, 132, 1, 4, null, 'https://i.imgur.com/zn27q6B.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(89, 'muk', 89, 12, 300, 175, 134, 1, 4, null, 'https://i.imgur.com/9OINeLz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(90, 'shellder', 90, 3, 40, 61, 136, 1, 11, null, 'https://i.imgur.com/8czj7ES.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(91, 'cloyster', 91, 15, 1325, 184, 137, 1, 11, 15, 'https://i.imgur.com/c3DN8xc.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(92, 'gastly', 92, 13, 1, 62, 138, 1, 8, 4, 'https://i.imgur.com/D0Hfdqx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(93, 'haunter', 93, 16, 1, 142, 139, 1, 8, 4, 'https://i.imgur.com/PflcGvJ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(94, 'gengar', 94, 15, 405, 225, 140, 1, 8, 4, 'https://i.imgur.com/9JPDvUo.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(95, 'onix', 95, 88, 2100, 77, 142, 1, 6, 5, 'https://i.imgur.com/HSdYOMf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(96, 'drowzee', 96, 10, 324, 66, 145, 1, 14, null, 'https://i.imgur.com/gW3CbDp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(97, 'hypno', 97, 16, 756, 169, 146, 1, 14, null, 'https://i.imgur.com/AMwb1zx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(98, 'krabby', 98, 4, 65, 65, 147, 1, 11, null, 'https://i.imgur.com/4hbk8Ox.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(99, 'kingler', 99, 13, 600, 166, 148, 1, 11, null, 'https://i.imgur.com/Eseqaxx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(100, 'voltorb', 100, 5, 104, 66, 149, 1, 13, null, 'https://i.imgur.com/t3QjhKR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(101, 'electrode', 101, 12, 666, 172, 150, 1, 13, null, 'https://i.imgur.com/95DVrPu.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(102, 'exeggcute', 102, 4, 25, 65, 151, 1, 12, 14, 'https://i.imgur.com/TD8VkL0.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(103, 'exeggutor', 103, 20, 1200, 186, 152, 1, 12, 14, 'https://i.imgur.com/4j6dMEO.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(104, 'cubone', 104, 4, 65, 64, 154, 1, 5, null, 'https://i.imgur.com/ZsZ9oK2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(105, 'marowak', 105, 10, 450, 149, 155, 1, 5, null, 'https://i.imgur.com/F8ncxoe.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(106, 'hitmonlee', 106, 15, 498, 159, 159, 1, 2, null, 'https://i.imgur.com/lqcewnk.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(107, 'hitmonchan', 107, 14, 502, 159, 160, 1, 2, null, 'https://i.imgur.com/J1ErsTY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(108, 'lickitung', 108, 12, 655, 77, 162, 1, 1, null, 'https://i.imgur.com/aFKViTL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(109, 'koffing', 109, 6, 10, 68, 164, 1, 4, null, 'https://i.imgur.com/1psPOrs.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(110, 'weezing', 110, 12, 95, 172, 165, 1, 4, null, 'https://i.imgur.com/l2Ey3Pl.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(111, 'rhyhorn', 111, 10, 1150, 69, 166, 1, 5, 3, 'https://i.imgur.com/QH4mkk2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(112, 'rhydon', 112, 19, 1200, 170, 167, 1, 5, 6, 'https://i.imgur.com/eTUYbXJ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(113, 'chansey', 113, 11, 346, 395, 170, 1, 1, null, 'https://i.imgur.com/FAAgewf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(114, 'tangela', 114, 10, 350, 87, 172, 1, 12, null, 'https://i.imgur.com/prXjyzG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(115, 'kangaskhan', 115, 22, 800, 172, 174, 1, 1, null, 'https://i.imgur.com/VgEJHvM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(116, 'horsea', 116, 4, 80, 59, 176, 1, 11, null, 'https://i.imgur.com/bmlwm2M.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(117, 'seadra', 117, 12, 250, 154, 177, 1, 11, null, 'https://i.imgur.com/N6xnGO9.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(118, 'goldeen', 118, 6, 150, 64, 179, 1, 11, null, 'https://i.imgur.com/lNQ2Anx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(119, 'seaking', 119, 13, 390, 158, 180, 1, 11, null, 'https://i.imgur.com/YptzUtL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(120, 'staryu', 120, 8, 345, 68, 181, 1, 11, null, 'https://i.imgur.com/kpRvCcP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(121, 'starmie', 121, 11, 800, 182, 182, 1, 11, 14, 'https://i.imgur.com/hYCXL8u.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(122, 'mr-mime', 122, 13, 545, 161, 184, 1, 14, 18, 'https://i.imgur.com/x8YJNOM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(123, 'scyther', 123, 15, 560, 100, 185, 1, 7, 3, 'https://i.imgur.com/vHot0mf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(124, 'jynx', 124, 14, 406, 159, 189, 1, 15, 14, 'https://i.imgur.com/SKdeZib.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(125, 'electabuzz', 125, 11, 300, 172, 191, 1, 13, null, 'https://i.imgur.com/IGyYILm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(126, 'magmar', 126, 13, 445, 173, 194, 1, 10, null, 'https://i.imgur.com/06mlHmZ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(127, 'pinsir', 127, 15, 550, 175, 196, 1, 7, null, 'https://i.imgur.com/aW5JsEd.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(128, 'tauros', 128, 14, 884, 172, 198, 1, 1, null, 'https://i.imgur.com/MnkJB5A.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(129, 'magikarp', 129, 9, 100, 40, 199, 1, 11, null, 'https://i.imgur.com/aduK7nf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(130, 'gyarados', 130, 65, 2350, 189, 200, 1, 11, 3, 'https://i.imgur.com/7Sb5vTz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(131, 'lapras', 131, 25, 2200, 187, 202, 1, 11, 15, 'https://i.imgur.com/WpMKFCh.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(132, 'ditto', 132, 3, 40, 101, 203, 1, 1, null, 'https://i.imgur.com/cTI2L2N.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(133, 'eevee', 133, 3, 65, 65, 204, 1, 1, null, 'https://i.imgur.com/qYArzRQ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(134, 'vaporeon', 134, 10, 290, 184, 205, 1, 11, null, 'https://i.imgur.com/5UaQofP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(135, 'jolteon', 135, 8, 245, 184, 206, 1, 13, null, 'https://i.imgur.com/qrfQ7yi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(136, 'flareon', 136, 9, 250, 184, 207, 1, 10, null, 'https://i.imgur.com/ZTZdR4P.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(137, 'porygon', 137, 8, 365, 79, 213, 1, 1, null, 'https://i.imgur.com/UzgsZqF.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(138, 'omanyte', 138, 4, 75, 71, 216, 1, 6, 11, 'https://i.imgur.com/jFZCyIF.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(139, 'omastar', 139, 10, 350, 173, 217, 1, 6, 11, 'https://i.imgur.com/ViAZVO6.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(140, 'kabuto', 140, 5, 115, 71, 218, 1, 6, 11, 'https://i.imgur.com/dlVDpzz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(141, 'kabutops', 141, 13, 405, 173, 219, 1, 6, 11, 'https://i.imgur.com/i6Gixlh.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(142, 'aerodactyl', 142, 18, 590, 180, 220, 1, 6, 3, 'https://i.imgur.com/NcPNfei.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(143, 'snorlax', 143, 21, 4600, 189, 223, 1, 1, null, 'https://i.imgur.com/ls3lbOc.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(144, 'articuno', 144, 17, 554, 261, 224, 1, 15, 3, 'https://i.imgur.com/swFJNgh.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(145, 'zapdos', 145, 16, 526, 261, 225, 1, 13, 3, 'https://i.imgur.com/tR5mdCD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(146, 'moltres', 146, 20, 600, 261, 226, 1, 10, 3, 'https://i.imgur.com/8xebAB0.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(147, 'dratini', 147, 18, 33, 60, 227, 1, 16, null, 'https://i.imgur.com/bfeH7Rx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(148, 'dragonair', 148, 40, 165, 147, 228, 1, 16, null, 'https://i.imgur.com/qEWesSC.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(149, 'dragonite', 149, 22, 2100, 270, 229, 1, 16, 3, 'https://i.imgur.com/ORfuvMg.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(150, 'mewtwo', 150, 20, 1220, 306, 230, 1, 14, null, 'https://i.imgur.com/1ftENMb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(151, 'mew', 151, 4, 40, 270, 233, 1, 14, null, 'https://i.imgur.com/t9aznIK.jpg');
-----------------------------------------------------------------------------------------------------------------------------------------------------------------,,------------------------------------
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(152, 'chikorita', 152, 9, 64, 64, 234, 1, 12 , null , 'https://i.imgur.com/sgmYD3U.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(153, 'bayleef', 153, 12, 158, 142, 235, 1, 12 , null , 'https://i.imgur.com/c7GEwCv.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(154, 'meganium', 154, 18, 1005, 236, 236, 1, 12 , null, 'https://i.imgur.com/p0puglV.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(155, 'cyndaquil', 155, 5, 79, 62, 237, 1, 10 , null , 'https://i.imgur.com/XzKGl1j.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(156, 'quilava', 156, 9, 190, 142, 238, 1, 10 , null , 'https://i.imgur.com/XpuEYF2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(157, 'typhlosion', 157, 17, 795, 240, 239, 1, 10 , null , 'https://i.imgur.com/U430FW7.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(158, 'totodile', 158, 6, 95, 63, 240, 1, 11 , null , 'https://i.imgur.com/9zPgDs0.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(159, 'croconaw', 159, 11, 250, 142, 241, 1, 11 , null , 'https://i.imgur.com/Lad913A.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(160, 'feraligatr', 160, 23, 888, 239, 242, 1, 11 , null , 'https://i.imgur.com/paqc6yL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(161, 'sentret', 161, 8, 60, 43, 243, 1, 1 , null , 'https://i.imgur.com/FwafCGE.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(162, 'furret', 162, 18, 325, 145, 244, 1, 1 , null , 'https://i.imgur.com/02nSLAO.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(163, 'hoothoot', 163, 7, 212, 52, 245, 1, 1 , 3 , 'https://i.imgur.com/OK1safW.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(164, 'noctowl', 164, 16, 408, 158, 246, 1, 1 , 3 , 'https://i.imgur.com/93mRIag.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(165, 'ledyba', 165, 10, 108, 53, 247, 1, 7 , 3 , 'https://i.imgur.com/dCXGLHB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(166, 'ledian', 166, 14, 356, 137, 248, 1, 7 , 3 , 'https://i.imgur.com/5OlOTx1.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(167, 'spinarak', 167, 5, 85, 50, 249, 1, 7, 4 , 'https://i.imgur.com/NSNjEwm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(168, 'ariados', 168, 11, 335, 140, 250, 1, 7 , 4 , 'https://i.imgur.com/HkZMCoN.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(169, 'crobat', 169, 18, 750, 241, 73, 1, 4 , 3 , 'https://i.imgur.com/blzOJlE.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(170, 'chinchou', 170, 5, 120, 66, 251, 1, 11 , 13 , 'https://i.imgur.com/8buooZ3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(171, 'lanturn', 171, 12, 225, 161, 252, 1, 11 , 13 , 'https://i.imgur.com/iqgOL6x.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(172, 'pichu', 172, 3, 20, 41, 34, 1, 13 , null , 'https://i.imgur.com/FB5BP6d.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(173, 'cleffa', 173, 3, 30, 44, 61, 1, 18 , null , 'https://i.imgur.com/h5RaNeI.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(174, 'igglybuff', 174, 3, 10, 42, 68, 1, 1 , 18 , 'https://i.imgur.com/G64muBR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(175, 'togepi', 175, 3, 15, 49, 253, 1, 18 , null , 'https://i.imgur.com/RFAt2EY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(176, 'togetic', 176, 6, 32, 142, 254, 1, 18, 3 , 'https://i.imgur.com/fCMs83w.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(177, 'natu', 177, 2, 20, 64, 256, 1, 14 , 3 , 'https://i.imgur.com/HjkgdMa.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(178, 'xatu', 178, 15, 150, 165, 257, 1, 14 , 3 , 'https://i.imgur.com/xyAIc7F.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(179, 'mareep', 179, 6, 78, 56, 258, 1, 13 , null , 'https://i.imgur.com/v8bNA9L.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(180, 'flaaffy', 180, 8, 133, 128, 259, 1, 13 , null , 'https://i.imgur.com/mnsUZRS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(181, 'ampharos', 181, 14, 615, 230, 260, 1, 13 , null , 'https://i.imgur.com/eW8rJCY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(182, 'bellossom', 182, 4, 58, 221, 77, 1, 12 , null , 'https://i.imgur.com/qeYqvKn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(183, 'marill', 183, 4, 85, 88, 263, 1, 11 , 18 , 'https://i.imgur.com/iBd4cN3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(184, 'azumarill', 184, 8, 285, 189, 264, 1, 11 , 18 , 'https://i.imgur.com/ibh6uDQ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(185, 'sudowoodo', 185, 12, 380, 144, 266, 1, 6 , null , 'https://i.imgur.com/lCJjc91.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(186, 'politoed', 186, 11, 339, 225, 99, 1, 11 , null , 'https://i.imgur.com/Eb6ScQl.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(187, 'hoppip', 187, 4, 5, 50, 267, 1, 12 , 3 , 'https://i.imgur.com/b9Fo7T8.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(188, 'skiploom', 188, 6, 10, 119, 268, 1, 12 , 3 , 'https://i.imgur.com/QxSUb4s.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(189, 'jumpluff', 189, 8, 30, 207, 269, 1, 12 , 3 , 'https://i.imgur.com/jR8bXNZ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(190, 'aipom', 190, 8, 115, 72, 270, 1, 1 , null , 'https://i.imgur.com/5xTLkux.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(191, 'sunkern', 191, 3, 18, 36, 272, 1, 12 , null , 'https://i.imgur.com/SUUKTtH.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(192, 'sunflora', 192, 8, 85, 149, 273, 1, 12 , null , 'https://i.imgur.com/Yy6BqDM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(193, 'yanma', 193, 12, 380, 78, 274, 1, 7 , 3 , 'https://i.imgur.com/gBVcOxF.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(194, 'wooper', 194, 4, 85, 42, 276, 1, 11, 5 , 'https://i.imgur.com/qJeLzvG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(195, 'quagsire', 195, 14, 750, 151, 277, 1, 11 , 5 , 'https://i.imgur.com/3Aygw2m.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(196, 'espeon', 196, 9, 265, 184, 208, 1, 14 , null , 'https://i.imgur.com/bFKPOpE.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(197, 'umbreon', 197, 10, 270, 184, 209, 1, 17 , null , 'https://i.imgur.com/94Y993Q.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(198, 'murkrow', 198, 5, 21, 81, 278, 1, 17 , 3 , 'https://i.imgur.com/nvskAIX.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(199, 'slowking', 199, 20, 795, 172, 123, 1, 11 , 14 , 'https://i.imgur.com/8OyNWbM.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(200, 'misdreavus', 200, 7, 10, 87, 280, 1, 8 , null , 'https://i.imgur.com/tq67IBR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(201, 'unown', 201, 5, 50, 118, 282, 1, 14 , null , 'https://i.imgur.com/7jg2o4D.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(202, 'wobbuffet', 202, 13, 285, 142, 284, 1, 14 , null , 'https://i.imgur.com/okWpfFZ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(203, 'girafarig', 203, 15, 415, 159, 285, 1, 1 , 14 , 'https://i.imgur.com/cLZCEi0.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(204, 'pineco', 204, 6, 72, 58, 286, 1, 7, null , 'https://i.imgur.com/hym9W9L.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(205, 'forretress', 205, 12, 1258, 163, 287, 1, 7 , 9 , 'https://i.imgur.com/BfI5c1U.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(206, 'dunsparce', 206, 15, 140, 145, 288, 1, 1 , null , 'https://i.imgur.com/tptmfus.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(207, 'gligar', 207, 11, 648, 86, 289, 1, 5 , 3 , 'https://i.imgur.com/Xd0Op9Z.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(208, 'steelix', 208, 92, 4000, 179, 143, 1, 9 , 5 , 'https://i.imgur.com/ccX3dSF.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(209, 'snubbull', 209, 6, 78, 60, 291, 1, 18 , null , 'https://i.imgur.com/MHqZrVc.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(210, 'granbull', 210, 14, 487, 158, 292, 1, 18, null , 'https://i.imgur.com/KrDidmR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(211, 'qwilfish', 211, 5, 39, 88, 293, 1, 11 , 4 , 'https://i.imgur.com/1x6ixry.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(212, 'scizor', 212, 18, 1180, 175, 186, 1, 7 , 9 , 'https://i.imgur.com/wkKFGww.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(213, 'shuckle', 213, 6, 205, 177, 294, 1, 7 , 6 , 'https://i.imgur.com/FuUDz4m.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(214, 'heracross', 214, 15, 540, 175, 295, 1, 7, 2, 'https://i.imgur.com/MqK3j46.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(215, 'sneasel', 215, 9, 280, 86, 297, 1, 17, 15 , 'https://i.imgur.com/oZSPDFP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(216, 'teddiursa', 216, 6, 88, 66, 299, 1, 1 , null , 'https://i.imgur.com/t97o9Pi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(217, 'ursaring', 217, 18, 1258, 175, 300, 1, 1 , null , 'https://i.imgur.com/Tc3EoKq.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(218, 'slugma', 218, 7, 350, 50, 301, 1, 10 , null , 'https://i.imgur.com/cPQqSPq.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(219, 'magcargo', 219, 8, 550, 151, 302, 1, 10, 6, 'https://i.imgur.com/RFm2D3t.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(220, 'swinub', 220, 4, 65, 50, 303, 1, 15 , 5 , 'https://i.imgur.com/n1RZj7H.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(221, 'piloswine', 221, 11, 558, 158, 304, 1, 15 , 5 , 'https://i.imgur.com/lu4vL81.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(222, 'corsola', 222, 6, 50, 144, 306, 1, 11, 6 , 'https://i.imgur.com/hjAo5l3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(223, 'remoraid', 223, 6, 120, 60, 307, 1, 11 , null , 'https://i.imgur.com/UMAAh8r.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(224, 'octillery', 224, 9, 285, 168, 308, 1, 11 , null , 'https://i.imgur.com/cWXIL1f.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(225, 'delibird', 225, 9, 160, 116, 309, 1, 15 , 3 , 'https://i.imgur.com/t42uspk.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(226, 'mantine', 226, 21, 2200, 170, 311, 1, 11 , 3, 'https://i.imgur.com/cilw1JG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(227, 'skarmory', 227, 17, 505, 163, 312, 1, 9 , 3 , 'https://i.imgur.com/v5XGTTD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(228, 'houndour', 228, 6, 108, 66, 313, 1, 17 , 10 , 'https://i.imgur.com/ProLCOT.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(229, 'houndoom', 229, 14, 350, 175, 314, 1, 17 , 10 , 'https://i.imgur.com/tPNaABY.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(230, 'kingdra', 230, 18, 1520, 243, 178, 1, 11 , 16 , 'https://i.imgur.com/SUwAy9T.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(231, 'phanpy', 231, 5, 335, 66, 316, 1, 5, null, 'https://i.imgur.com/LCdC2Uq.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(232, 'donphan', 232, 11, 1200, 175, 317, 1, 5 , null , 'https://i.imgur.com/6Xh5ABn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(233, 'porygon2', 233, 6, 325, 180, 214, 1, 1 , null , 'https://i.imgur.com/pn1oBuL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(234, 'stantler', 234, 14, 712, 163, 318, 1, 1 , null , 'https://i.imgur.com/j9CXhdP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(235, 'smeargle', 235, 12, 580, 88, 319, 1, 1 , null , 'https://i.imgur.com/e5hKAk2.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(236, 'tyrogue', 236, 7, 210, 42, 158, 1, 2 , null , 'https://i.imgur.com/lIZkoML.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(237, 'hitmontop', 237, 14, 480, 159, 161, 1, 2 , null , 'https://i.imgur.com/dsBqVtG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(238, 'smoochum', 238, 4, 60, 61, 188, 1, 15 , 14 , 'https://i.imgur.com/rs1H93C.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(239, 'elekid', 239, 6, 235, 72, 190, 1, 13 , null , 'https://i.imgur.com/MFqbqnH.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(240, 'magby', 240, 7, 214, 73, 193, 1, 10 , null , 'https://i.imgur.com/cWtsJMS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(241, 'miltank', 241, 12, 755, 172, 320, 1, 1, null , 'https://i.imgur.com/fp84xqR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(242, 'blissey', 242, 15, 468, 608, 171, 1, 1 , null , 'https://i.imgur.com/t5iEfIp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(243, 'raikou', 243, 19, 1780, 261, 321, 1, 13 , null , 'https://i.imgur.com/lyXMM1q.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(244, 'entei', 244, 21, 1980, 261, 322, 1, 10 , null , 'https://i.imgur.com/DXsEPbv.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(245, 'suicune', 245, 20, 1870, 261, 323, 1, 11 , null , 'https://i.imgur.com/iZw50ec.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(246, 'larvitar', 246, 6, 720, 60, 324, 1, 6, 5 , 'https://i.imgur.com/OhaI0HK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(247, 'pupitar', 247, 12, 1520, 144, 325, 1, 6 , 5 , 'https://i.imgur.com/7l4aAJb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(248, 'tyranitar', 248, 20, 2020, 270, 326, 1, 6, 17, 'https://i.imgur.com/CBmGxFx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(249, 'lugia', 249, 52, 2160, 306, 328, 1, 14, 3 , 'https://i.imgur.com/M4aezrQ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(250, 'ho-oh', 250, 38, 1990, 306, 329, 1, 10 , 3 , 'https://i.imgur.com/M5jNuql.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(251, 'celebi', 251, 6, 50, 270, 330, 1, 14 , 12 , 'https://i.imgur.com/pX3hdvm.jpg');
--------------------------------------------------------------------------------------------------------------------------------------------------------------------,,------------------------------------
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(252, 'treecko', 252, 5, 50, 62, 331, 1, 12 , null , 'https://i.imgur.com/fPgc1Mw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(253, 'grovyle', 253, 9, 216, 142, 332, 1, 12  , null  , 'https://i.imgur.com/muWTCel.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(254, 'sceptile', 254, 17, 522, 239, 333, 1, 12 , null  , 'https://i.imgur.com/TY01XGb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(255, 'torchic', 255, 4, 25, 62, 335, 1, 10  , null , 'https://i.imgur.com/5rMZVBB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(256, 'combusken', 256, 9, 195, 142, 336, 1, 10 , 2  , 'https://i.imgur.com/GorCXCB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(257, 'blaziken', 257, 19, 520, 239, 337, 1, 10 , 2 , 'https://i.imgur.com/4p2fGGb.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(258, 'mudkip', 258, 4, 76, 62, 339, 1, 11 , null  , 'https://i.imgur.com/ymHD8LQ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(259, 'marshtomp', 259, 7, 280, 142, 340, 1, 11 , 5  , 'https://i.imgur.com/6gH46ZS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(260, 'swampert', 260, 15, 819, 241, 341, 1, 11  , 5  , 'https://i.imgur.com/WnSJ9bB.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(261, 'poochyena', 261, 5, 136, 56, 343, 1, 17 , null  , 'https://i.imgur.com/PkvEKks.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(262, 'mightyena', 262, 10, 370, 147, 344, 1, 17  , null  , 'https://i.imgur.com/8tSKuVz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(263, 'zigzagoon', 263, 4, 175, 56, 345, 1, 1 , null  , 'https://i.imgur.com/ZXFsElf.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(264, 'linoone', 264, 5, 325, 147, 346, 1, 1  , null  , 'https://i.imgur.com/BZQUbYn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(265, 'wurmple', 265, 3, 36, 56, 347, 1, 7  , null  , 'https://i.imgur.com/haBgivl.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(266, 'silcoon', 266, 6, 100, 72, 348, 1, 7 , null  , 'https://i.imgur.com/SAaUl31.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(267, 'beautifly', 267, 10, 284, 178, 349, 1, 7  , 3  , 'https://i.imgur.com/5OOQics.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(268, 'cascoon', 268, 7, 115, 72, 350, 1, 7 , null  , 'https://i.imgur.com/eWqVRAC.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(269, 'dustox', 269, 12, 316, 173, 351, 1, 7  , 4  , 'https://i.imgur.com/Um0uqST.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(270, 'lotad', 270, 5, 26, 44, 352, 1, 11 , 12  , 'https://i.imgur.com/MBWzczi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(271, 'lombre', 271, 12, 325, 119, 353, 1, 11 , 12  , 'https://i.imgur.com/zvX0U7t.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(272, 'ludicolo', 272, 15, 550, 216, 354, 1, 11 , 12  , 'https://i.imgur.com/LjG5b6d.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(273, 'seedot', 273, 5, 40, 44, 355, 1, 12 , null  , 'https://i.imgur.com/3QcBLhP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(274, 'nuzleaf', 274, 10, 280, 119, 356, 1, 12, 17 , 'https://i.imgur.com/ggD6aeK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(275, 'shiftry', 275, 13, 596, 216, 357, 1, 12  , 17  , 'https://i.imgur.com/PVC5jTp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(276, 'taillow', 276, 3, 23, 54, 358, 1, 1  , 3  , 'https://i.imgur.com/IlaHz05.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(277, 'swellow', 277, 7, 198, 159, 359, 1, 1 , 3  , 'https://i.imgur.com/m7RcThg.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(278, 'wingull', 278, 6, 95, 54, 360, 1, 11 , 3  , 'https://i.imgur.com/Ld9e4ik.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(279, 'pelipper', 279, 12, 280, 154, 361, 1, 11  , 3  , 'https://i.imgur.com/PmrKTgm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(280, 'ralts', 280, 4, 66, 40, 362, 1, 14  , 18  , 'https://i.imgur.com/7hTqtT3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(281, 'kirlia', 281, 8, 202, 97, 363, 1, 14  , 18  , 'https://i.imgur.com/WuioKT3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(282, 'gardevoir', 282, 16, 484, 233, 364, 1, 14 , 18 , 'https://i.imgur.com/jmqBMgU.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(283, 'surskit', 283, 5, 17, 54, 368, 1, 7 , 11  , 'https://i.imgur.com/XPqconP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(284, 'masquerain', 284, 8, 36, 159, 369, 1, 7 , 3 , 'https://i.imgur.com/HK3TCFj.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(285, 'shroomish', 285, 4, 45, 59, 370, 1, 12 , null  , 'https://i.imgur.com/pVQUYQI.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(286, 'breloom', 286, 12, 392, 161, 371, 1, 12  , 2  , 'https://i.imgur.com/5oQPYmn.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(287, 'slakoth', 287, 8, 240, 56, 372, 1, 1  , null  , 'https://i.imgur.com/WT5D7q5.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(288, 'vigoroth', 288, 14, 465, 154, 373, 1, 1 , null  , 'https://i.imgur.com/OPZ2h1B.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(289, 'slaking', 289, 20, 1305, 252, 374, 1, 1 , null , 'https://i.imgur.com/hrlS1Zk.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(290, 'nincada', 290, 5, 55, 53, 375, 1, 7 , 5  , 'https://i.imgur.com/cnPHboz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(291, 'ninjask', 291, 8, 120, 160, 376, 1, 7 , 3  , 'https://i.imgur.com/Npimx84.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(292, 'shedinja', 292, 8, 12, 83, 377, 1, 7  , 8  , 'https://i.imgur.com/LyRbySd.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(293, 'whismur', 293, 6, 163, 48, 378, 1, 1 , null  , 'https://i.imgur.com/KhloBJw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(294, 'loudred', 294, 10, 405, 126, 379, 1, 1  , null  , 'https://i.imgur.com/MYKi2u6.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(295, 'exploud', 295, 15, 840, 221, 380, 1, 1 , null , 'https://i.imgur.com/aCjg8Xd.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(296, 'makuhita', 296, 10, 864, 47, 381, 1, 2  , null  , 'https://i.imgur.com/jpUdWiS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(297, 'hariyama', 297, 23, 2538, 166, 382, 1, 2 , null , 'https://i.imgur.com/xtNIeRD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(298, 'azurill', 298, 2, 20, 38, 262, 1, 1, 18 , 'https://i.imgur.com/zIwqsMw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(299, 'nosepass', 299, 10, 970, 75, 383, 1, 6 , null  , 'https://i.imgur.com/IG6l78a.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(300, 'skitty', 300, 6, 110, 52, 385, 1, 1  , null  , 'https://i.imgur.com/sYRWSvP.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(301, 'delcatty', 301, 11, 326, 140, 386, 1, 1, null  , 'https://i.imgur.com/WptCDaL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(302, 'sableye', 302, 5, 110, 133, 387, 1, 17 , 8  , 'https://i.imgur.com/37zYzVu.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(303, 'mawile', 303, 6, 115, 133, 389, 1, 9 , 18  , 'https://i.imgur.com/6zxrhXq.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(304, 'aron', 304, 4, 600, 66, 391, 1, 9  , 6  , 'https://i.imgur.com/HOI9840.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(305, 'lairon', 305, 9, 1200, 151, 392, 1, 9 , 6  , 'https://i.imgur.com/nE09V3I.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(306, 'aggron', 306, 21, 3600, 239, 393, 1, 9  , 6  , 'https://i.imgur.com/9hunFzV.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(307, 'meditite', 307, 6, 112, 56, 395, 1, 2  , 14  , 'https://i.imgur.com/EdJoIOZ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(308, 'medicham', 308, 13, 315, 144, 396, 1, 2  , 14  , 'https://i.imgur.com/c1qPGZU.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(309, 'electrike', 309, 6, 152, 59, 398, 1, 13 , null , 'https://i.imgur.com/Cwsl7ZC.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(310, 'manectric', 310, 15, 402, 166, 399, 1, 13 , null , 'https://i.imgur.com/cMCwGQ9.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(311, 'plusle', 311, 4, 42, 142, 401, 1, 13  , null  , 'https://i.imgur.com/uZgUjq8.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(312, 'minun', 312, 4, 42, 142, 402, 1, 13  , null  , 'https://i.imgur.com/n7BG5U7.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(313, 'volbeat', 313, 7, 177, 151, 403, 1, 7 , null  , 'https://i.imgur.com/L9DaOBR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(314, 'illumise', 314, 6, 177, 151, 404, 1, 7 , null  , 'https://i.imgur.com/X1r2v3a.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(315, 'roselia', 315, 3, 20, 140, 406, 1, 12  , 4  , 'https://i.imgur.com/jOxXzBW.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(316, 'gulpin', 316, 4, 103, 60, 408, 1, 4  , null  , 'https://i.imgur.com/iJejJdS.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(317, 'swalot', 317, 17, 800, 163, 409, 1, 4 , null  , 'https://i.imgur.com/mfuO8RR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(318, 'carvanha', 318, 8, 208, 61, 410, 1, 11 , 17  , 'https://i.imgur.com/FbTL17D.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(319, 'sharpedo', 319, 18, 888, 161, 411, 1, 11 , 17  , 'https://i.imgur.com/HcGir7W.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(320, 'wailmer', 320, 20, 1300, 80, 413, 1, 11, null , 'https://i.imgur.com/8ZZp7sR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(321, 'wailord', 321, 145, 3980, 175, 414, 1, 11 , null  , 'https://i.imgur.com/iQJGhVX.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(322, 'numel', 322, 7, 240, 61, 415, 1, 10 , 5 , 'https://i.imgur.com/vfkW7UO.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(323, 'camerupt', 323, 19, 2200, 161, 416, 1, 10 , 5  , 'https://i.imgur.com/vfm2sLp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(324, 'torkoal', 324, 5, 804, 165, 418, 1, 10 , null  , 'https://i.imgur.com/704TRX6.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(325, 'spoink', 325, 7, 306, 66, 419, 1, 14 , null  , 'https://i.imgur.com/GlzEcBi.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(326, 'grumpig', 326, 9, 715, 165, 420, 1, 14 , null  , 'https://i.imgur.com/eyZRx1I.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(327, 'spinda', 327, 11, 50, 126, 421, 1, 1 , null  , 'https://i.imgur.com/cKgfTsF.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(328, 'trapinch', 328, 7, 150, 58, 422, 1, 5 , null  , 'https://i.imgur.com/W47kOGL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(329, 'vibrava', 329, 11, 153, 119, 423, 1, 5  , null  , 'https://i.imgur.com/zrEn9nj.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(330, 'flygon', 330, 20, 820, 234, 424, 1, 5 , 16  , 'https://i.imgur.com/XDjQfq1.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(331, 'cacnea', 331, 4, 513, 67, 425, 1, 12  , null  , 'https://i.imgur.com/dxtotkG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(332, 'cacturne', 332, 13, 774, 166, 426, 1, 12 , 17  , 'https://i.imgur.com/SMS6aex.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(333, 'swablu', 333, 4, 12, 62, 427, 1, 1 , 3  , 'https://i.imgur.com/owJ3HE8.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(334, 'altaria', 334, 11, 206, 172, 428, 1, 16 , 3  , 'https://i.imgur.com/YDNEASN.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(335, 'zangoose', 335, 13, 403, 160, 430, 1, 1 , null  , 'https://i.imgur.com/3ebsj4W.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(336, 'seviper', 336, 27, 525, 160, 431, 1, 4 , null  , 'https://i.imgur.com/pS42Vho.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(337, 'lunatone', 337, 10, 1680, 161, 432, 1, 6 , 14 , 'https://i.imgur.com/0T0qpQK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(338, 'solrock', 338, 12, 1540, 161, 433, 1, 6 , 14  , 'https://i.imgur.com/qitRA2N.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(339, 'barboach', 339, 4, 19, 58, 434, 1, 11  , 5  , 'https://i.imgur.com/ZGe2P6D.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(340, 'whiscash', 340, 9, 236, 164, 435, 1, 11 , 5  , 'https://i.imgur.com/Mrwkcpp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(341, 'corphish', 341, 6, 115, 62, 436, 1, 11 , null  , 'https://i.imgur.com/Oqzeisu.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(342, 'crawdaunt', 342, 11, 328, 164, 437, 1, 11 , 17  , 'https://i.imgur.com/9UueRTu.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(343, 'baltoy', 343, 5, 215, 60, 438, 1, 5  , 14  , 'https://i.imgur.com/qpc6R5l.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(344, 'claydol', 344, 15, 1080, 175, 439, 1, 5  , 14  , 'https://i.imgur.com/CfIhNEG.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(345, 'lileep', 345, 10, 238, 71, 440, 1, 6  , 12  , 'https://i.imgur.com/svVrE1x.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(346, 'cradily', 346, 15, 604, 173, 441, 1, 6  , 12  , 'https://i.imgur.com/wAJqpYw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(347, 'anorith', 347, 7, 125, 71, 442, 1, 6 , 7 , 'https://i.imgur.com/aBHrpnU.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(348, 'armaldo', 348, 15, 682, 173, 443, 1, 6 , 7  , 'https://i.imgur.com/xIfrTNK.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(349, 'feebas', 349, 6, 74, 40, 444, 1, 11 , null  , 'https://i.imgur.com/LyqxXxc.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(350, 'milotic', 350, 62, 1620, 189, 445, 1, 11 , null  , 'https://i.imgur.com/r94ZyHt.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(351, 'castform', 351, 3, 8, 147, 446, 1, 1  , null  , 'https://i.imgur.com/S7EUOkD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(352, 'kecleon', 352, 10, 220, 154, 450, 1, 1 , null  , 'https://i.imgur.com/MT8wKrR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(353, 'shuppet', 353, 6, 23, 59, 451, 1, 8 , null  , 'https://i.imgur.com/5EeKUqh.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(354, 'banette', 354, 11, 125, 159, 452, 1, 8 , null  , 'https://i.imgur.com/S3bmXcR.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(355, 'duskull', 355, 8, 150, 59, 454, 1, 8 , null  , 'https://i.imgur.com/9wH8naW.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(356, 'dusclops', 356, 16, 306, 159, 455, 1, 8  , null  , 'https://i.imgur.com/hPBpfU9.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(357, 'tropius', 357, 20, 1000, 161, 457, 1, 12 , 3 , 'https://i.imgur.com/QuS5We8.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(358, 'chimecho', 358, 6, 10, 159, 459, 1, 14 , null  , 'https://i.imgur.com/vUoX6JW.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(359, 'absol', 359, 12, 470, 163, 460, 1, 17  , null  , 'https://i.imgur.com/WlDf3Jx.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(360, 'wynaut', 360, 6, 140, 52, 283, 1, 14 , null  , 'https://i.imgur.com/eTkExLJ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(361, 'snorunt', 361, 7, 168, 60, 462, 1, 15  , null  , 'https://i.imgur.com/WTegvJX.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(362, 'glalie', 362, 15, 2565, 168, 463, 1, 15 , null , 'https://i.imgur.com/jCUqf6i.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(363, 'spheal', 363, 8, 395, 58, 466, 1, 15 , 11  , 'https://i.imgur.com/SuhkHxp.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(364, 'sealeo', 364, 11, 876, 144, 467, 1, 15 , 11  , 'https://i.imgur.com/TcN0LSQ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(365, 'walrein', 365, 14, 1506, 239, 468, 1, 15  , 11 , 'https://i.imgur.com/AmnVY31.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(366, 'clamperl', 366, 4, 525, 69, 469, 1, 11 , null , 'https://i.imgur.com/dGbSDlD.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(367, 'huntail', 367, 17, 270, 170, 470, 1, 11 , null , 'https://i.imgur.com/am4Q5lm.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(368, 'gorebyss', 368, 18, 226, 170, 471, 1, 11  , null  , 'https://i.imgur.com/UrfGf0Q.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(369, 'relicanth', 369, 10, 234, 170, 472, 1, 11 , 6  , 'https://i.imgur.com/tOdkB1G.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(370, 'luvdisc', 370, 6, 87, 116, 473, 1, 11 , null  , 'https://i.imgur.com/GmT7fFr.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(371, 'bagon', 371, 6, 421, 60, 474, 1, 16  , null  , 'https://i.imgur.com/wPFLkTJ.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(372, 'shelgon', 372, 11, 1105, 147, 475, 1, 16 , null , 'https://i.imgur.com/XCztMvL.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(373, 'salamence', 373, 15, 1026, 270, 476, 1, 16 , 3  , 'https://i.imgur.com/1OyBPPs.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(374, 'beldum', 374, 6, 952, 60, 478, 1, 9 , 14 , 'https://i.imgur.com/W3Qr55d.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(375, 'metang', 375, 12, 2025, 147, 479, 1, 9 , 14 , 'https://i.imgur.com/ZcD83z1.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(376, 'metagross', 376, 16, 5500, 270, 480, 1, 9 , 14  , 'https://i.imgur.com/VOvlce3.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(377, 'regirock', 377, 17, 2300, 261, 482, 1, 6  , null , 'https://i.imgur.com/xgZGlHc.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(378, 'regice', 378, 18, 1750, 261, 483, 1, 15  , null, 'https://i.imgur.com/bPUjnxw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(379, 'registeel', 379, 19, 2050, 261, 484, 1, 9 , null , 'https://i.imgur.com/bPUjnxw.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(380, 'latias', 380, 14, 400, 270, 485, 1, 16 , 14, 'https://i.imgur.com/OvwUo2q.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(381, 'latios', 381, 20, 600, 270, 487, 1, 16 , 14 , 'https://i.imgur.com/sy1eLIe.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(382, 'kyogre', 382, 45, 3520, 302, 489, 1, 11  , null , 'https://i.imgur.com/IZlyi0c.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(383, 'groudon', 383, 35, 9500, 302, 491, 1, 5  , null  , 'https://i.imgur.com/R3GcaOz.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(384, 'rayquaza', 384, 70, 2065, 306, 493, 1, 16 , 3  , 'https://i.imgur.com/6cJHaYr.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(385, 'jirachi', 385, 3, 11, 270, 495, 1, 9 , 14  , 'https://i.imgur.com/Nw8R3az.jpg');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(386, 'deoxys', 386, 17, 608, 270, 496, 1, 14  , null  , 'https://i.imgur.com/UyVcPBR.jpg');
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(387, 'turtwig', 387, 4, 102, 64, 500, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(388, 'grotle', 388, 11, 970, 142, 501, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(389, 'torterra', 389, 22, 3100, 236, 502, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(390, 'chimchar', 390, 5, 62, 62, 503, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(391, 'monferno', 391, 9, 220, 142, 504, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(392, 'infernape', 392, 12, 550, 240, 505, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(393, 'piplup', 393, 4, 52, 63, 506, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(394, 'prinplup', 394, 8, 230, 142, 507, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(395, 'empoleon', 395, 17, 845, 239, 508, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(396, 'starly', 396, 3, 20, 49, 509, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(397, 'staravia', 397, 6, 155, 119, 510, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(398, 'staraptor', 398, 12, 249, 218, 511, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(399, 'bidoof', 399, 5, 200, 50, 512, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(400, 'bibarel', 400, 10, 315, 144, 513, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(401, 'kricketot', 401, 3, 22, 39, 514, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(402, 'kricketune', 402, 10, 255, 134, 515, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(403, 'shinx', 403, 5, 95, 53, 516, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(404, 'luxio', 404, 9, 305, 127, 517, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(405, 'luxray', 405, 14, 420, 235, 518, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(406, 'budew', 406, 2, 12, 56, 405, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(407, 'roserade', 407, 9, 145, 232, 407, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(408, 'cranidos', 408, 9, 315, 70, 519, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(409, 'rampardos', 409, 16, 1025, 173, 520, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(410, 'shieldon', 410, 5, 570, 70, 521, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(411, 'bastiodon', 411, 13, 1495, 173, 522, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(412, 'burmy', 412, 2, 34, 45, 523, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(413, 'wormadam-plant', 413, 5, 65, 148, 524, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(414, 'mothim', 414, 9, 233, 148, 527, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(415, 'combee', 415, 3, 55, 49, 528, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(416, 'vespiquen', 416, 12, 385, 166, 529, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(417, 'pachirisu', 417, 4, 39, 142, 530, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(418, 'buizel', 418, 7, 295, 66, 531, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(419, 'floatzel', 419, 11, 335, 173, 532, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(420, 'cherubi', 420, 4, 33, 55, 533, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(421, 'cherrim', 421, 5, 93, 158, 534, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(422, 'shellos', 422, 3, 63, 65, 535, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(423, 'gastrodon', 423, 9, 299, 166, 536, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(424, 'ambipom', 424, 12, 203, 169, 271, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(425, 'drifloon', 425, 4, 12, 70, 537, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(426, 'drifblim', 426, 12, 150, 174, 538, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(427, 'buneary', 427, 4, 55, 70, 539, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(428, 'lopunny', 428, 12, 333, 168, 540, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(429, 'mismagius', 429, 9, 44, 173, 281, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(430, 'honchkrow', 430, 9, 273, 177, 279, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(431, 'glameow', 431, 5, 39, 62, 542, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(432, 'purugly', 432, 10, 438, 158, 543, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(433, 'chingling', 433, 2, 6, 57, 458, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(434, 'stunky', 434, 4, 192, 66, 544, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(435, 'skuntank', 435, 10, 380, 168, 545, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(436, 'bronzor', 436, 5, 605, 60, 546, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(437, 'bronzong', 437, 13, 1870, 175, 547, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(438, 'bonsly', 438, 5, 150, 58, 265, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(439, 'mime-jr', 439, 6, 130, 62, 183, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(440, 'happiny', 440, 6, 244, 110, 169, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(441, 'chatot', 441, 5, 19, 144, 548, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(442, 'spiritomb', 442, 10, 1080, 170, 549, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(443, 'gible', 443, 7, 205, 60, 550, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(444, 'gabite', 444, 14, 560, 144, 551, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(445, 'garchomp', 445, 19, 950, 270, 552, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(446, 'munchlax', 446, 6, 1050, 78, 222, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(447, 'riolu', 447, 7, 202, 57, 554, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(448, 'lucario', 448, 12, 540, 184, 555, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(449, 'hippopotas', 449, 8, 495, 66, 557, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(450, 'hippowdon', 450, 20, 3000, 184, 558, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(451, 'skorupi', 451, 8, 120, 66, 559, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(452, 'drapion', 452, 13, 615, 175, 560, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(453, 'croagunk', 453, 7, 230, 60, 561, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(454, 'toxicroak', 454, 13, 444, 172, 562, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(455, 'carnivine', 455, 14, 270, 159, 563, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(456, 'finneon', 456, 4, 70, 66, 564, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(457, 'lumineon', 457, 12, 240, 161, 565, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(458, 'mantyke', 458, 10, 650, 69, 310, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(459, 'snover', 459, 10, 505, 67, 566, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(460, 'abomasnow', 460, 22, 1355, 173, 567, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(461, 'weavile', 461, 11, 340, 179, 298, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(462, 'magnezone', 462, 12, 1800, 241, 126, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(463, 'lickilicky', 463, 17, 1400, 180, 163, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(464, 'rhyperior', 464, 24, 2828, 241, 168, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(465, 'tangrowth', 465, 20, 1286, 187, 173, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(466, 'electivire', 466, 18, 1386, 243, 192, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(467, 'magmortar', 467, 16, 680, 243, 195, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(468, 'togekiss', 468, 15, 380, 245, 255, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(469, 'yanmega', 469, 19, 515, 180, 275, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(470, 'leafeon', 470, 10, 255, 184, 210, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(471, 'glaceon', 471, 8, 259, 184, 211, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(472, 'gliscor', 472, 20, 425, 179, 290, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(473, 'mamoswine', 473, 25, 2910, 239, 305, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(474, 'porygon-z', 474, 9, 340, 241, 215, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(475, 'gallade', 475, 16, 520, 233, 366, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(476, 'probopass', 476, 14, 3400, 184, 384, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(477, 'dusknoir', 477, 22, 1066, 236, 456, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(478, 'froslass', 478, 13, 266, 168, 465, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(479, 'rotom', 479, 3, 3, 154, 569, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(480, 'uxie', 480, 3, 3, 261, 575, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(481, 'mesprit', 481, 3, 3, 261, 576, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(482, 'azelf', 482, 3, 3, 261, 577, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(483, 'dialga', 483, 54, 6830, 306, 578, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(484, 'palkia', 484, 42, 3360, 306, 579, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(485, 'heatran', 485, 17, 4300, 270, 580, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(486, 'regigigas', 486, 37, 4200, 302, 581, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(487, 'giratina-altered', 487, 45, 7500, 306, 582, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(488, 'cresselia', 488, 15, 856, 270, 584, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(489, 'phione', 489, 4, 31, 216, 585, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(490, 'manaphy', 490, 3, 14, 270, 586, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(491, 'darkrai', 491, 15, 505, 270, 587, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(492, 'shaymin-land', 492, 2, 21, 270, 588, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(493, 'arceus', 493, 32, 3200, 324, 590, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(494, 'victini', 494, 4, 40, 270, 591, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(495, 'snivy', 495, 6, 81, 62, 592, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(496, 'servine', 496, 8, 160, 145, 593, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(497, 'serperior', 497, 33, 630, 238, 594, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(498, 'tepig', 498, 5, 99, 62, 595, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(499, 'pignite', 499, 10, 555, 146, 596, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(500, 'emboar', 500, 16, 1500, 238, 597, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(501, 'oshawott', 501, 5, 59, 62, 598, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(502, 'dewott', 502, 8, 245, 145, 599, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(503, 'samurott', 503, 15, 946, 238, 600, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(504, 'patrat', 504, 5, 116, 51, 601, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(505, 'watchog', 505, 11, 270, 147, 602, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(506, 'lillipup', 506, 4, 41, 55, 603, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(507, 'herdier', 507, 9, 147, 130, 604, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(508, 'stoutland', 508, 12, 610, 225, 605, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(509, 'purrloin', 509, 4, 101, 56, 606, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(510, 'liepard', 510, 11, 375, 156, 607, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(511, 'pansage', 511, 6, 105, 63, 608, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(512, 'simisage', 512, 11, 305, 174, 609, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(513, 'pansear', 513, 6, 110, 63, 610, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(514, 'simisear', 514, 10, 280, 174, 611, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(515, 'panpour', 515, 6, 135, 63, 612, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(516, 'simipour', 516, 10, 290, 174, 613, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(517, 'munna', 517, 6, 233, 58, 614, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(518, 'musharna', 518, 11, 605, 170, 615, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(519, 'pidove', 519, 3, 21, 53, 616, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(520, 'tranquill', 520, 6, 150, 125, 617, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(521, 'unfezant', 521, 12, 290, 220, 618, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(522, 'blitzle', 522, 8, 298, 59, 619, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(523, 'zebstrika', 523, 16, 795, 174, 620, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(524, 'roggenrola', 524, 4, 180, 56, 621, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(525, 'boldore', 525, 9, 1020, 137, 622, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(526, 'gigalith', 526, 17, 2600, 232, 623, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(527, 'woobat', 527, 4, 21, 65, 624, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(528, 'swoobat', 528, 9, 105, 149, 625, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(529, 'drilbur', 529, 3, 85, 66, 626, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(530, 'excadrill', 530, 7, 404, 178, 627, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(531, 'audino', 531, 11, 310, 390, 628, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(532, 'timburr', 532, 6, 125, 61, 630, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(533, 'gurdurr', 533, 12, 400, 142, 631, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(534, 'conkeldurr', 534, 14, 870, 227, 632, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(535, 'tympole', 535, 5, 45, 59, 633, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(536, 'palpitoad', 536, 8, 170, 134, 634, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(537, 'seismitoad', 537, 15, 620, 229, 635, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(538, 'throh', 538, 13, 555, 163, 636, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(539, 'sawk', 539, 14, 510, 163, 637, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(540, 'sewaddle', 540, 3, 25, 62, 638, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(541, 'swadloon', 541, 5, 73, 133, 639, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(542, 'leavanny', 542, 12, 205, 225, 640, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(543, 'venipede', 543, 4, 53, 52, 641, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(544, 'whirlipede', 544, 12, 585, 126, 642, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(545, 'scolipede', 545, 25, 2005, 218, 643, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(546, 'cottonee', 546, 3, 6, 56, 644, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(547, 'whimsicott', 547, 7, 66, 168, 645, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(548, 'petilil', 548, 5, 66, 56, 646, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(549, 'lilligant', 549, 11, 163, 168, 647, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(550, 'basculin-red-striped', 550, 10, 180, 161, 648, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(551, 'sandile', 551, 7, 152, 58, 650, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(552, 'krokorok', 552, 10, 334, 123, 651, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(553, 'krookodile', 553, 15, 963, 234, 652, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(554, 'darumaka', 554, 6, 375, 63, 653, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(555, 'darmanitan-standard', 555, 13, 929, 168, 654, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(556, 'maractus', 556, 10, 280, 161, 656, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(557, 'dwebble', 557, 3, 145, 65, 657, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(558, 'crustle', 558, 14, 2000, 170, 658, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(559, 'scraggy', 559, 6, 118, 70, 659, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(560, 'scrafty', 560, 11, 300, 171, 660, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(561, 'sigilyph', 561, 14, 140, 172, 661, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(562, 'yamask', 562, 5, 15, 61, 662, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(563, 'cofagrigus', 563, 17, 765, 169, 663, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(564, 'tirtouga', 564, 7, 165, 71, 664, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(565, 'carracosta', 565, 12, 810, 173, 665, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(566, 'archen', 566, 5, 95, 71, 666, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(567, 'archeops', 567, 14, 320, 177, 667, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(568, 'trubbish', 568, 6, 310, 66, 668, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(569, 'garbodor', 569, 19, 1073, 166, 669, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(570, 'zorua', 570, 7, 125, 66, 670, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(571, 'zoroark', 571, 16, 811, 179, 671, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(572, 'minccino', 572, 4, 58, 60, 672, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(573, 'cinccino', 573, 5, 75, 165, 673, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(574, 'gothita', 574, 4, 58, 58, 674, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(575, 'gothorita', 575, 7, 180, 137, 675, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(576, 'gothitelle', 576, 15, 440, 221, 676, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(577, 'solosis', 577, 3, 10, 58, 677, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(578, 'duosion', 578, 6, 80, 130, 678, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(579, 'reuniclus', 579, 10, 201, 221, 679, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(580, 'ducklett', 580, 5, 55, 61, 680, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(581, 'swanna', 581, 13, 242, 166, 681, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(582, 'vanillite', 582, 4, 57, 61, 682, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(583, 'vanillish', 583, 11, 410, 138, 683, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(584, 'vanilluxe', 584, 13, 575, 241, 684, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(585, 'deerling', 585, 6, 195, 67, 685, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(586, 'sawsbuck', 586, 19, 925, 166, 686, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(587, 'emolga', 587, 4, 50, 150, 687, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(588, 'karrablast', 588, 5, 59, 63, 688, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(589, 'escavalier', 589, 10, 330, 173, 689, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(590, 'foongus', 590, 2, 10, 59, 690, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(591, 'amoonguss', 591, 6, 105, 162, 691, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(592, 'frillish', 592, 12, 330, 67, 692, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(593, 'jellicent', 593, 22, 1350, 168, 693, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(594, 'alomomola', 594, 12, 316, 165, 694, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(595, 'joltik', 595, 1, 6, 64, 695, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(596, 'galvantula', 596, 8, 143, 165, 696, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(597, 'ferroseed', 597, 6, 188, 61, 697, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(598, 'ferrothorn', 598, 10, 1100, 171, 698, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(599, 'klink', 599, 3, 210, 60, 699, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(600, 'klang', 600, 6, 510, 154, 700, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(601, 'klinklang', 601, 6, 810, 234, 701, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(602, 'tynamo', 602, 2, 3, 55, 702, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(603, 'eelektrik', 603, 12, 220, 142, 703, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(604, 'eelektross', 604, 21, 805, 232, 704, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(605, 'elgyem', 605, 5, 90, 67, 705, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(606, 'beheeyem', 606, 10, 345, 170, 706, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(607, 'litwick', 607, 3, 31, 55, 707, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(608, 'lampent', 608, 6, 130, 130, 708, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(609, 'chandelure', 609, 10, 343, 234, 709, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(610, 'axew', 610, 6, 180, 64, 710, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(611, 'fraxure', 611, 10, 360, 144, 711, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(612, 'haxorus', 612, 18, 1055, 243, 712, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(613, 'cubchoo', 613, 5, 85, 61, 713, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(614, 'beartic', 614, 26, 2600, 177, 714, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(615, 'cryogonal', 615, 11, 1480, 180, 715, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(616, 'shelmet', 616, 4, 77, 61, 716, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(617, 'accelgor', 617, 8, 253, 173, 717, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(618, 'stunfisk', 618, 7, 110, 165, 718, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(619, 'mienfoo', 619, 9, 200, 70, 719, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(620, 'mienshao', 620, 14, 355, 179, 720, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(621, 'druddigon', 621, 16, 1390, 170, 721, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(622, 'golett', 622, 10, 920, 61, 722, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(623, 'golurk', 623, 28, 3300, 169, 723, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(624, 'pawniard', 624, 5, 102, 68, 724, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(625, 'bisharp', 625, 16, 700, 172, 725, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(626, 'bouffalant', 626, 16, 946, 172, 726, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(627, 'rufflet', 627, 5, 105, 70, 727, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(628, 'braviary', 628, 15, 410, 179, 728, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(629, 'vullaby', 629, 5, 90, 74, 729, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(630, 'mandibuzz', 630, 12, 395, 179, 730, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(631, 'heatmor', 631, 14, 580, 169, 731, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(632, 'durant', 632, 3, 330, 169, 732, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(633, 'deino', 633, 8, 173, 60, 733, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(634, 'zweilous', 634, 14, 500, 147, 734, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(635, 'hydreigon', 635, 18, 1600, 270, 735, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(636, 'larvesta', 636, 11, 288, 72, 736, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(637, 'volcarona', 637, 16, 460, 248, 737, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(638, 'cobalion', 638, 21, 2500, 261, 738, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(639, 'terrakion', 639, 19, 2600, 261, 739, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(640, 'virizion', 640, 20, 2000, 261, 740, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(641, 'tornadus-incarnate', 641, 15, 630, 261, 741, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(642, 'thundurus-incarnate', 642, 15, 610, 261, 743, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(643, 'reshiram', 643, 32, 3300, 306, 745, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(644, 'zekrom', 644, 29, 3450, 306, 746, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(645, 'landorus-incarnate', 645, 15, 680, 270, 747, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(646, 'kyurem', 646, 30, 3250, 297, 749, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(647, 'keldeo-ordinary', 647, 14, 485, 261, 752, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(648, 'meloetta-aria', 648, 6, 65, 270, 754, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(649, 'genesect', 649, 15, 825, 270, 756, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(650, 'chespin', 650, 4, 90, 63, 757, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(651, 'quilladin', 651, 7, 290, 142, 758, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(652, 'chesnaught', 652, 16, 900, 239, 759, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(653, 'fennekin', 653, 4, 94, 61, 760, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(654, 'braixen', 654, 10, 145, 143, 761, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(655, 'delphox', 655, 15, 390, 240, 762, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(656, 'froakie', 656, 3, 70, 63, 763, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(657, 'frogadier', 657, 6, 109, 142, 764, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(658, 'greninja', 658, 15, 400, 239, 765, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(659, 'bunnelby', 659, 4, 50, 47, 768, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(660, 'diggersby', 660, 10, 424, 148, 769, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(661, 'fletchling', 661, 3, 17, 56, 770, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(662, 'fletchinder', 662, 7, 160, 134, 771, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(663, 'talonflame', 663, 12, 245, 175, 772, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(664, 'scatterbug', 664, 3, 25, 40, 773, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(665, 'spewpa', 665, 3, 84, 75, 774, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(666, 'vivillon', 666, 12, 170, 185, 775, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(667, 'litleo', 667, 6, 135, 74, 776, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(668, 'pyroar', 668, 15, 815, 177, 777, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(669, 'flabebe', 669, 1, 1, 61, 778, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(670, 'floette', 670, 2, 9, 130, 779, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(671, 'florges', 671, 11, 100, 248, 781, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(672, 'skiddo', 672, 9, 310, 70, 782, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(673, 'gogoat', 673, 17, 910, 186, 783, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(674, 'pancham', 674, 6, 80, 70, 784, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(675, 'pangoro', 675, 21, 1360, 173, 785, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(676, 'furfrou', 676, 12, 280, 165, 786, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(677, 'espurr', 677, 3, 35, 71, 787, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(678, 'meowstic-male', 678, 6, 85, 163, 788, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(679, 'honedge', 679, 8, 20, 65, 790, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(680, 'doublade', 680, 8, 45, 157, 791, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(681, 'aegislash-shield', 681, 17, 530, 234, 792, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(682, 'spritzee', 682, 2, 5, 68, 794, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(683, 'aromatisse', 683, 8, 155, 162, 795, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(684, 'swirlix', 684, 4, 35, 68, 796, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(685, 'slurpuff', 685, 8, 50, 168, 797, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(686, 'inkay', 686, 4, 35, 58, 798, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(687, 'malamar', 687, 15, 470, 169, 799, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(688, 'binacle', 688, 5, 310, 61, 800, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(689, 'barbaracle', 689, 13, 960, 175, 801, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(690, 'skrelp', 690, 5, 73, 64, 802, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(691, 'dragalge', 691, 18, 815, 173, 803, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(692, 'clauncher', 692, 5, 83, 66, 804, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(693, 'clawitzer', 693, 13, 353, 100, 805, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(694, 'helioptile', 694, 5, 60, 58, 806, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(695, 'heliolisk', 695, 10, 210, 168, 807, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(696, 'tyrunt', 696, 8, 260, 72, 808, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(697, 'tyrantrum', 697, 25, 2700, 182, 809, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(698, 'amaura', 698, 13, 252, 72, 810, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(699, 'aurorus', 699, 27, 2250, 104, 811, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(700, 'sylveon', 700, 10, 235, 184, 212, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(701, 'hawlucha', 701, 8, 215, 175, 812, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(702, 'dedenne', 702, 2, 22, 151, 813, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(703, 'carbink', 703, 3, 57, 100, 814, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(704, 'goomy', 704, 3, 28, 60, 815, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(705, 'sliggoo', 705, 8, 175, 158, 816, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(706, 'goodra', 706, 20, 1505, 270, 817, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(707, 'klefki', 707, 2, 30, 165, 818, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(708, 'phantump', 708, 4, 70, 62, 819, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(709, 'trevenant', 709, 15, 710, 166, 820, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(710, 'pumpkaboo-average', 710, 4, 50, 67, 821, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(711, 'gourgeist-average', 711, 9, 125, 173, 825, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(712, 'bergmite', 712, 10, 995, 61, 829, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(713, 'avalugg', 713, 20, 5050, 180, 830, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(714, 'noibat', 714, 5, 80, 49, 831, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(715, 'noivern', 715, 15, 850, 187, 832, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(716, 'xerneas', 716, 30, 2150, 306, 833, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(717, 'yveltal', 717, 58, 2030, 306, 834, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(718, 'zygarde', 718, 50, 3050, 270, 835, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(719, 'diancie', 719, 7, 88, 270, 839, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(720, 'hoopa', 720, 5, 90, 270, 841, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(721, 'volcanion', 721, 17, 1950, 270, 843, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(722, 'rowlet', 722, 3, 15, 64, 844, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(723, 'dartrix', 723, 7, 160, 147, 845, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(724, 'decidueye', 724, 16, 366, 239, 846, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(725, 'litten', 725, 4, 43, 64, 847, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(726, 'torracat', 726, 7, 250, 147, 848, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(727, 'incineroar', 727, 18, 830, 239, 849, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(728, 'popplio', 728, 4, 75, 64, 850, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(729, 'brionne', 729, 6, 175, 147, 851, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(730, 'primarina', 730, 18, 440, 239, 852, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(731, 'pikipek', 731, 3, 12, 53, 853, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(732, 'trumbeak', 732, 6, 148, 124, 854, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(733, 'toucannon', 733, 11, 260, 218, 855, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(734, 'yungoos', 734, 4, 60, 51, 856, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(735, 'gumshoos', 735, 7, 142, 146, 857, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(736, 'grubbin', 736, 4, 44, 60, 859, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(737, 'charjabug', 737, 5, 105, 140, 860, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(738, 'vikavolt', 738, 15, 450, 225, 861, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(739, 'crabrawler', 739, 6, 70, 68, 863, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(740, 'crabominable', 740, 17, 1800, 167, 864, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(741, 'oricorio-baile', 741, 6, 34, 167, 865, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(742, 'cutiefly', 742, 1, 2, 61, 869, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(743, 'ribombee', 743, 2, 5, 162, 870, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(744, 'rockruff', 744, 5, 92, 56, 872, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(745, 'lycanroc-midday', 745, 8, 250, 170, 874, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(746, 'wishiwashi-solo', 746, 2, 3, 61, 877, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(747, 'mareanie', 747, 4, 80, 61, 879, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(748, 'toxapex', 748, 7, 145, 173, 880, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(749, 'mudbray', 749, 10, 1100, 77, 881, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(750, 'mudsdale', 750, 25, 9200, 175, 882, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(751, 'dewpider', 751, 3, 40, 54, 883, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(752, 'araquanid', 752, 18, 820, 159, 884, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(753, 'fomantis', 753, 3, 15, 50, 886, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(754, 'lurantis', 754, 9, 185, 168, 887, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(755, 'morelull', 755, 2, 15, 57, 889, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(756, 'shiinotic', 756, 10, 115, 142, 890, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(757, 'salandit', 757, 6, 48, 64, 891, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(758, 'salazzle', 758, 12, 222, 168, 892, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(759, 'stufful', 759, 5, 68, 68, 894, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(760, 'bewear', 760, 21, 1350, 175, 895, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(761, 'bounsweet', 761, 3, 32, 42, 896, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(762, 'steenee', 762, 7, 82, 102, 897, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(763, 'tsareena', 763, 12, 214, 230, 898, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(764, 'comfey', 764, 1, 3, 170, 899, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(765, 'oranguru', 765, 15, 760, 172, 900, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(766, 'passimian', 766, 20, 828, 172, 901, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(767, 'wimpod', 767, 5, 120, 46, 902, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(768, 'golisopod', 768, 20, 1080, 186, 903, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(769, 'sandygast', 769, 5, 700, 64, 904, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(770, 'palossand', 770, 13, 2500, 168, 905, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(771, 'pyukumuku', 771, 3, 12, 144, 906, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(772, 'type-null', 772, 19, 1205, 107, 907, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(773, 'silvally', 773, 23, 1005, 257, 908, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(774, 'minior-red-meteor', 774, 3, 400, 154, 909, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(775, 'komala', 775, 4, 199, 168, 923, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(776, 'turtonator', 776, 20, 2120, 170, 924, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(777, 'togedemaru', 777, 3, 33, 152, 925, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(778, 'mimikyu-disguised', 778, 2, 7, 167, 927, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(779, 'bruxish', 779, 9, 190, 166, 931, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(780, 'drampa', 780, 30, 1850, 170, 932, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(781, 'dhelmise', 781, 39, 2100, 181, 933, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(782, 'jangmo-o', 782, 6, 297, 60, 934, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(783, 'hakamo-o', 783, 12, 470, 147, 935, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(784, 'kommo-o', 784, 16, 782, 270, 936, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(785, 'tapu-koko', 785, 18, 205, 257, 938, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(786, 'tapu-lele', 786, 12, 186, 257, 939, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(787, 'tapu-bulu', 787, 19, 455, 257, 940, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(788, 'tapu-fini', 788, 13, 212, 257, 941, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(789, 'cosmog', 789, 2, 1, 40, 942, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(790, 'cosmoem', 790, 1, 9999, 140, 943, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(791, 'solgaleo', 791, 34, 2300, 306, 944, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(792, 'lunala', 792, 40, 1200, 306, 945, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(793, 'nihilego', 793, 12, 555, 257, 946, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(794, 'buzzwole', 794, 24, 3336, 257, 947, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(795, 'pheromosa', 795, 18, 250, 257, 948, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(796, 'xurkitree', 796, 38, 1000, 257, 949, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(797, 'celesteela', 797, 92, 9999, 257, 950, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(798, 'kartana', 798, 3, 1, 257, 951, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(799, 'guzzlord', 799, 55, 8880, 257, 952, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(800, 'necrozma', 800, 24, 2300, 270, 953, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(801, 'magearna', 801, 10, 805, 270, 957, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(802, 'marshadow', 802, 7, 222, 270, 959, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(803, 'poipole', 803, 6, 18, 189, 960, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(804, 'naganadel', 804, 36, 1500, 243, 961, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(805, 'stakataka', 805, 55, 8200, 257, 962, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(806, 'blacephalon', 806, 18, 130, 257, 963, 1,              ,              , 'null');
INSERT INTO pokemon
	(id, identifier, species_id, height, weight, base_experience, ordre, is_default,type_1,type_2, picture)
VALUES
	(807, 'zeraora', 807, 15, 445, 270, 964, 1,              ,              , 'null');


-- Table: types
DROP TABLE IF EXISTS types;
CREATE TABLE types
(
	id INTEGER NOT NULL,
	identifier VARCHAR(79) NOT NULL,
	generation_id INTEGER NOT NULL,
	damage_class_id INTEGER,
	PRIMARY KEY (id)
	--FOREIGN KEY(generation_id) REFERENCES generations (id), 
	--FOREIGN KEY(damage_class_id) REFERENCES move_damage_classes (id)
);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(1, 'normal', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(2, 'fighting', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(3, 'flying', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(4, 'poison', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(5, 'ground', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(6, 'rock', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(7, 'bug', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(8, 'ghost', 1, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(9, 'steel', 2, 2);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(10, 'fire', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(11, 'water', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(12, 'grass', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(13, 'electric', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(14, 'psychic', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(15, 'ice', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(16, 'dragon', 1, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(17, 'dark', 2, 3);
INSERT INTO types
	(id, identifier, generation_id, damage_class_id)
VALUES
	(18, 'fairy', 6, NULL);

DROP TABLE IF EXISTS pokemon_sprites;
CREATE TABLE pokemon_sprites
(
	pokemon_id INTEGER NOT NULL,
	description VARCHAR(79) NOT NULL,
	sprite_url VARCHAR(79)
);

INSERT INTO pokemon_sprites
	(pokemon_id, description, sprite_url)
VALUES
	(1, 'front', 'https://i.imgur.com/9CJcjiA.png');
INSERT INTO pokemon_sprites
	(pokemon_id, description, sprite_url)
VALUES
	(1, 'back', 'https://i.imgur.com/UcbM7Gn.png');
INSERT INTO pokemon_sprites
	(pokemon_id, description, sprite_url)
VALUES
	(1, 'front_golden', 'https://i.imgur.com/vta5Qwl.png');
INSERT INTO pokemon_sprites
	(pokemon_id, description, sprite_url)
VALUES
	(1, 'back_golden', 'https://i.imgur.com/VZ39Lz0.png');


DROP TABLE IF EXISTS pokemon_abilities CASCADE;
CREATE TABLE pokemon_abilities (
	pokemon_id INTEGER NOT NULL, 
	ability_id INTEGER NOT NULL, 
	is_hidden INTEGER NOT NULL, 
	slot INTEGER NOT NULL, 
	PRIMARY KEY (pokemon_id), 
	FOREIGN KEY(pokemon_id) REFERENCES pokemon (id), 
	FOREIGN KEY(ability_id) REFERENCES abilities (id), 
	CHECK (is_hidden IN (0, 1))
);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (1, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (1, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (2, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (2, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (3, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (3, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (4, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (4, 94, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (5, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (5, 94, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (6, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (6, 94, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (7, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (7, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (8, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (8, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (9, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (9, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (10, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (10, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (11, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (12, 14, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (12, 110, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (13, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (13, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (14, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (15, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (15, 97, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (16, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (16, 77, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (16, 145, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (17, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (17, 77, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (17, 145, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (18, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (18, 77, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (18, 145, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (19, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (19, 62, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (19, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (20, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (20, 62, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (20, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (21, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (21, 97, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (22, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (22, 97, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (23, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (23, 61, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (23, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (24, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (24, 61, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (24, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (25, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (25, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (26, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (26, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (27, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (27, 146, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (28, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (28, 146, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (29, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (29, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (29, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (30, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (30, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (30, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (31, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (31, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (31, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (32, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (32, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (32, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (33, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (33, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (33, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (34, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (34, 79, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (34, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (35, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (35, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (35, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (36, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (36, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (36, 109, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (37, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (37, 70, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (38, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (38, 70, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (39, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (39, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (39, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (40, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (40, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (40, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (41, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (41, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (42, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (42, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (43, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (43, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (44, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (44, 1, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (45, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (45, 27, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (46, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (46, 87, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (46, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (47, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (47, 87, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (47, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (48, 14, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (48, 110, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (48, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (49, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (49, 110, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (49, 147, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (50, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (50, 71, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (50, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (51, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (51, 71, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (51, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (52, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (52, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (52, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (53, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (53, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (53, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (54, 6, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (54, 13, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (54, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (55, 6, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (55, 13, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (55, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (56, 72, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (56, 83, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (56, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (57, 72, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (57, 83, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (57, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (58, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (58, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (58, 154, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (59, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (59, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (59, 154, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (60, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (60, 6, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (60, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (61, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (61, 6, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (61, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (62, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (62, 6, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (62, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (63, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (63, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (63, 98, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (64, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (64, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (64, 98, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (65, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (65, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (65, 98, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (66, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (66, 99, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (66, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (67, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (67, 99, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (67, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (68, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (68, 99, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (68, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (69, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (69, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (70, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (70, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (71, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (71, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (72, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (72, 64, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (72, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (73, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (73, 64, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (73, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (74, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (74, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (74, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (75, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (75, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (75, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (76, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (76, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (76, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (77, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (77, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (77, 49, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (78, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (78, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (78, 49, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (79, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (79, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (79, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (80, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (80, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (80, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (81, 42, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (81, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (81, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (82, 42, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (82, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (82, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (83, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (83, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (83, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (84, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (84, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (84, 77, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (85, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (85, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (85, 77, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (86, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (86, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (86, 115, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (87, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (87, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (87, 115, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (88, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (88, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (88, 143, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (89, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (89, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (89, 143, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (90, 75, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (90, 92, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (90, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (91, 75, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (91, 92, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (91, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (92, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (93, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (94, 130, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (95, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (95, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (95, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (96, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (96, 108, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (96, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (97, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (97, 108, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (97, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (98, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (98, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (98, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (99, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (99, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (99, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (100, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (100, 9, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (100, 106, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (101, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (101, 9, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (101, 106, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (102, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (102, 139, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (103, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (103, 139, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (104, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (104, 31, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (104, 4, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (105, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (105, 31, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (105, 4, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (106, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (106, 120, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (106, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (107, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (107, 89, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (107, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (108, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (108, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (108, 13, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (109, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (110, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (111, 31, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (111, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (111, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (112, 31, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (112, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (112, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (113, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (113, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (113, 131, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (114, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (114, 102, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (114, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (115, 48, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (115, 113, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (115, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (116, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (116, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (116, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (117, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (117, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (117, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (118, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (118, 41, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (118, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (119, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (119, 41, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (119, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (120, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (120, 30, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (120, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (121, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (121, 30, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (121, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (122, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (122, 111, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (122, 101, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (123, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (123, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (123, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (124, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (124, 108, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (124, 87, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (125, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (125, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (126, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (126, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (127, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (127, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (127, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (128, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (128, 83, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (128, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (129, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (129, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (130, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (130, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (131, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (131, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (131, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (132, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (132, 150, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (133, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (133, 91, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (133, 107, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (134, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (134, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (135, 10, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (135, 95, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (136, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (136, 62, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (137, 36, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (137, 88, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (137, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (138, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (138, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (138, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (139, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (139, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (139, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (140, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (140, 4, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (140, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (141, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (141, 4, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (141, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (142, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (142, 46, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (142, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (143, 17, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (143, 47, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (143, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (144, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (144, 81, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (145, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (145, 9, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (146, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (146, 49, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (147, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (147, 63, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (148, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (148, 63, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (149, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (149, 136, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (150, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (150, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (151, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (152, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (152, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (153, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (153, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (154, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (154, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (155, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (155, 18, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (156, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (156, 18, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (157, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (157, 18, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (158, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (158, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (159, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (159, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (160, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (160, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (161, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (161, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (161, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (162, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (162, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (162, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (163, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (163, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (163, 110, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (164, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (164, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (164, 110, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (165, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (165, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (165, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (166, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (166, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (166, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (167, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (167, 15, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (167, 97, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (168, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (168, 15, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (168, 97, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (169, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (169, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (170, 10, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (170, 35, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (170, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (171, 10, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (171, 35, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (171, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (172, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (172, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (173, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (173, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (173, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (174, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (174, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (174, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (175, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (175, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (175, 105, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (176, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (176, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (176, 105, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (177, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (177, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (177, 156, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (178, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (178, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (178, 156, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (179, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (179, 57, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (180, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (180, 57, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (181, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (181, 57, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (182, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (182, 131, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (183, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (183, 37, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (183, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (184, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (184, 37, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (184, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (185, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (185, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (185, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (186, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (186, 6, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (186, 2, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (187, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (187, 102, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (187, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (188, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (188, 102, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (188, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (189, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (189, 102, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (189, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (190, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (190, 53, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (190, 92, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (191, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (191, 94, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (191, 48, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (192, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (192, 94, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (192, 48, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (193, 3, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (193, 14, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (193, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (194, 6, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (194, 11, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (194, 109, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (195, 6, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (195, 11, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (195, 109, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (196, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (196, 156, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (197, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (197, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (198, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (198, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (198, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (199, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (199, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (199, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (200, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (201, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (202, 23, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (202, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (203, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (203, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (203, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (204, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (204, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (205, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (205, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (206, 32, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (206, 50, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (206, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (207, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (207, 8, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (207, 17, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (208, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (208, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (208, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (209, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (209, 50, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (209, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (210, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (210, 95, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (210, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (211, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (211, 33, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (211, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (212, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (212, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (212, 135, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (213, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (213, 82, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (213, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (214, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (214, 62, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (214, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (215, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (215, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (215, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (216, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (216, 95, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (216, 118, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (217, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (217, 95, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (217, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (218, 40, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (218, 49, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (218, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (219, 40, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (219, 49, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (219, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (220, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (220, 81, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (220, 47, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (221, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (221, 81, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (221, 47, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (222, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (222, 30, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (222, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (223, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (223, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (223, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (224, 21, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (224, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (224, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (225, 72, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (225, 55, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (225, 15, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (226, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (226, 11, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (226, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (227, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (227, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (227, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (228, 48, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (228, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (228, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (229, 48, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (229, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (229, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (230, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (230, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (230, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (231, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (231, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (232, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (232, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (233, 36, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (233, 88, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (233, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (234, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (234, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (234, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (235, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (235, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (235, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (236, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (236, 80, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (236, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (237, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (237, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (237, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (238, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (238, 108, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (238, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (239, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (239, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (240, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (240, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (241, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (241, 113, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (241, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (242, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (242, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (242, 131, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (243, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (243, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (244, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (244, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (245, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (245, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (246, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (246, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (247, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (248, 45, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (248, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (249, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (249, 136, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (250, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (250, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (251, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (252, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (252, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (253, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (253, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (254, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (254, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (255, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (255, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (256, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (256, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (257, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (257, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (258, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (258, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (259, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (259, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (260, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (260, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (261, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (261, 95, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (261, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (262, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (262, 95, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (262, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (263, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (263, 82, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (263, 95, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (264, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (264, 82, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (264, 95, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (265, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (265, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (266, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (267, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (267, 79, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (268, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (269, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (269, 14, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (270, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (270, 44, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (270, 20, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (271, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (271, 44, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (271, 20, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (272, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (272, 44, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (272, 20, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (273, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (273, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (273, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (274, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (274, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (274, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (275, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (275, 48, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (275, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (276, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (276, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (277, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (277, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (278, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (278, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (278, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (279, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (279, 2, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (279, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (280, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (280, 36, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (280, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (281, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (281, 36, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (281, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (282, 28, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (282, 36, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (282, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (283, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (283, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (284, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (284, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (285, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (285, 90, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (285, 95, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (286, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (286, 90, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (286, 101, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (287, 54, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (288, 72, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (289, 54, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (290, 14, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (290, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (291, 3, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (291, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (292, 25, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (293, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (293, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (294, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (294, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (295, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (295, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (296, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (296, 62, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (296, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (297, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (297, 62, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (297, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (298, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (298, 37, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (298, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (299, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (299, 42, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (299, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (300, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (300, 96, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (300, 147, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (301, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (301, 96, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (301, 147, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (302, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (302, 100, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (302, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (303, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (303, 22, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (303, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (304, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (304, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (304, 134, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (305, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (305, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (305, 134, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (306, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (306, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (306, 134, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (307, 74, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (307, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (308, 74, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (308, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (309, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (309, 31, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (309, 58, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (310, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (310, 31, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (310, 58, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (311, 57, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (311, 31, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (312, 58, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (312, 10, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (313, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (313, 68, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (313, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (314, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (314, 110, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (314, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (315, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (315, 38, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (315, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (316, 64, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (316, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (316, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (317, 64, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (317, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (317, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (318, 24, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (318, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (319, 24, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (319, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (320, 41, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (320, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (320, 46, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (321, 41, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (321, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (321, 46, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (322, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (322, 86, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (322, 20, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (323, 40, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (323, 116, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (323, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (324, 73, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (324, 70, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (324, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (325, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (325, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (325, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (326, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (326, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (326, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (327, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (327, 77, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (327, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (328, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (328, 71, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (328, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (329, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (330, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (331, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (331, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (332, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (332, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (333, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (333, 13, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (334, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (334, 13, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (335, 17, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (335, 137, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (336, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (336, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (337, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (338, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (339, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (339, 107, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (339, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (340, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (340, 107, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (340, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (341, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (341, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (341, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (342, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (342, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (342, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (343, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (344, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (345, 21, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (345, 114, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (346, 21, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (346, 114, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (347, 4, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (347, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (348, 4, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (348, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (349, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (349, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (349, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (350, 63, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (350, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (350, 56, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (351, 59, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (352, 16, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (352, 168, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (353, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (353, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (353, 130, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (354, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (354, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (354, 130, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (355, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (355, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (356, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (356, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (357, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (357, 94, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (357, 139, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (358, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (359, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (359, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (359, 154, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (360, 23, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (360, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (361, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (361, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (361, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (362, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (362, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (362, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (363, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (363, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (363, 12, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (364, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (364, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (364, 12, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (365, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (365, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (365, 12, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (366, 75, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (366, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (367, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (367, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (368, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (368, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (369, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (369, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (369, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (370, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (370, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (371, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (371, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (372, 69, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (372, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (373, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (373, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (374, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (374, 135, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (375, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (375, 135, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (376, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (376, 135, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (377, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (377, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (378, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (378, 115, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (379, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (379, 135, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (380, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (381, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (382, 2, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (383, 70, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (384, 76, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (385, 32, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (386, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (387, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (387, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (388, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (388, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (389, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (389, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (390, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (390, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (391, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (391, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (392, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (392, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (393, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (393, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (394, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (394, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (395, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (395, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (396, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (396, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (397, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (397, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (398, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (398, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (399, 86, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (399, 109, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (399, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (400, 86, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (400, 109, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (400, 141, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (401, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (401, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (402, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (402, 101, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (403, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (403, 22, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (403, 62, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (404, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (404, 22, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (404, 62, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (405, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (405, 22, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (405, 62, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (406, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (406, 38, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (406, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (407, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (407, 38, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (407, 101, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (408, 104, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (408, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (409, 104, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (409, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (410, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (410, 43, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (411, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (411, 43, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (412, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (412, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (413, 107, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (413, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (414, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (414, 110, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (415, 118, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (415, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (416, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (416, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (417, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (417, 53, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (417, 10, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (418, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (418, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (419, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (419, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (420, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (421, 122, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (422, 60, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (422, 114, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (422, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (423, 60, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (423, 114, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (423, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (424, 101, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (424, 53, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (424, 92, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (425, 106, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (425, 84, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (425, 138, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (426, 106, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (426, 84, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (426, 138, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (427, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (427, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (427, 7, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (428, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (428, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (428, 7, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (429, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (430, 15, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (430, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (430, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (431, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (431, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (431, 51, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (432, 47, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (432, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (432, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (433, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (434, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (434, 106, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (434, 51, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (435, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (435, 106, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (435, 51, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (436, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (436, 85, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (436, 134, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (437, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (437, 85, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (437, 134, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (438, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (438, 69, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (438, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (439, 43, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (439, 111, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (439, 101, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (440, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (440, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (440, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (441, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (441, 77, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (441, 145, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (442, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (442, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (443, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (443, 24, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (444, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (444, 24, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (445, 8, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (445, 24, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (446, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (446, 47, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (446, 82, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (447, 80, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (447, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (447, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (448, 80, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (448, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (448, 154, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (449, 45, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (449, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (450, 45, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (450, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (451, 4, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (451, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (451, 51, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (452, 4, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (452, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (452, 51, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (453, 107, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (453, 87, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (453, 143, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (454, 107, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (454, 87, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (454, 143, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (455, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (456, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (456, 114, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (456, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (457, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (457, 114, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (457, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (458, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (458, 11, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (458, 41, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (459, 117, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (459, 43, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (460, 117, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (460, 43, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (461, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (461, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (462, 42, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (462, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (462, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (463, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (463, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (463, 13, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (464, 31, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (464, 116, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (464, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (465, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (465, 102, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (465, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (466, 78, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (466, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (467, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (467, 72, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (468, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (468, 32, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (468, 105, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (469, 3, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (469, 110, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (469, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (470, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (470, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (471, 81, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (471, 115, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (472, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (472, 8, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (472, 90, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (473, 12, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (473, 81, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (473, 47, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (474, 91, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (474, 88, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (474, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (475, 80, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (475, 154, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (476, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (476, 42, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (476, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (477, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (477, 119, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (478, 81, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (478, 130, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (479, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (480, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (481, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (482, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (483, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (483, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (484, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (484, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (485, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (485, 49, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (486, 112, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (487, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (487, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (488, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (489, 93, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (490, 93, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (491, 123, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (492, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (493, 121, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (494, 162, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (495, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (495, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (496, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (496, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (497, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (497, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (498, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (498, 47, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (499, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (499, 47, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (500, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (500, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (501, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (501, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (502, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (502, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (503, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (503, 75, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (504, 50, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (504, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (504, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (505, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (505, 51, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (505, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (506, 72, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (506, 53, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (506, 50, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (507, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (507, 146, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (507, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (508, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (508, 146, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (508, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (509, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (509, 84, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (509, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (510, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (510, 84, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (510, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (511, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (511, 65, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (512, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (512, 65, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (513, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (513, 66, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (514, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (514, 66, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (515, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (515, 67, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (516, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (516, 67, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (517, 108, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (517, 28, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (517, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (518, 108, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (518, 28, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (518, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (519, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (519, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (519, 79, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (520, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (520, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (520, 79, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (521, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (521, 105, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (521, 79, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (522, 31, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (522, 78, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (522, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (523, 31, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (523, 78, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (523, 157, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (524, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (524, 133, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (524, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (525, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (525, 133, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (525, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (526, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (526, 45, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (526, 159, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (527, 109, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (527, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (527, 86, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (528, 109, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (528, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (528, 86, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (529, 146, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (529, 159, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (529, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (530, 146, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (530, 159, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (530, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (531, 131, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (531, 144, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (531, 103, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (532, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (532, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (532, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (533, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (533, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (533, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (534, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (534, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (534, 89, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (535, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (535, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (535, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (536, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (536, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (536, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (537, 33, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (537, 143, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (537, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (538, 62, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (538, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (538, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (539, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (539, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (539, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (540, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (540, 34, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (540, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (541, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (541, 34, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (541, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (542, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (542, 34, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (542, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (543, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (543, 68, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (543, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (544, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (544, 68, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (544, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (545, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (545, 68, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (545, 3, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (546, 158, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (546, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (546, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (547, 158, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (547, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (547, 34, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (548, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (548, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (548, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (549, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (549, 20, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (549, 102, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (550, 120, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (550, 91, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (550, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (551, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (551, 153, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (551, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (552, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (552, 153, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (552, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (553, 22, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (553, 153, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (553, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (554, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (554, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (555, 125, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (555, 161, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (556, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (556, 34, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (556, 114, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (557, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (557, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (557, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (558, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (558, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (558, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (559, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (559, 153, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (559, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (560, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (560, 153, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (560, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (561, 147, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (561, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (561, 110, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (562, 152, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (563, 152, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (564, 116, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (564, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (564, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (565, 116, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (565, 5, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (565, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (566, 129, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (567, 129, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (568, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (568, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (568, 106, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (569, 1, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (569, 133, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (569, 106, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (570, 149, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (571, 149, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (572, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (572, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (572, 92, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (573, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (573, 101, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (573, 92, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (574, 119, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (574, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (574, 23, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (575, 119, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (575, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (575, 23, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (576, 119, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (576, 172, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (576, 23, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (577, 142, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (577, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (577, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (578, 142, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (578, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (578, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (579, 142, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (579, 98, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (579, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (580, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (580, 145, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (580, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (581, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (581, 145, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (581, 93, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (582, 115, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (582, 81, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (582, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (583, 115, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (583, 81, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (583, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (584, 115, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (584, 117, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (584, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (585, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (585, 157, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (585, 32, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (586, 34, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (586, 157, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (586, 32, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (587, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (587, 78, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (588, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (588, 61, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (588, 99, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (589, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (589, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (589, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (590, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (590, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (591, 27, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (591, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (592, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (592, 130, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (592, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (593, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (593, 130, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (593, 6, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (594, 131, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (594, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (594, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (595, 14, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (595, 127, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (595, 68, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (596, 14, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (596, 127, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (596, 68, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (597, 160, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (598, 160, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (598, 107, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (599, 57, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (599, 58, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (599, 29, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (600, 57, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (600, 58, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (600, 29, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (601, 57, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (601, 58, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (601, 29, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (602, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (603, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (604, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (605, 140, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (605, 28, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (605, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (606, 140, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (606, 28, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (606, 148, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (607, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (607, 49, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (607, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (608, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (608, 49, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (608, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (609, 18, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (609, 49, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (609, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (610, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (610, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (610, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (611, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (611, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (611, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (612, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (612, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (612, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (613, 81, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (613, 202, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (613, 155, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (614, 81, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (614, 202, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (614, 33, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (615, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (616, 93, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (616, 75, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (616, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (617, 93, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (617, 60, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (617, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (618, 9, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (618, 7, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (618, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (619, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (619, 144, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (619, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (620, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (620, 144, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (620, 120, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (621, 24, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (621, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (621, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (622, 89, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (622, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (622, 99, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (623, 89, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (623, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (623, 99, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (624, 128, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (624, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (624, 46, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (625, 128, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (625, 39, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (625, 46, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (626, 120, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (626, 157, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (626, 43, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (627, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (627, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (627, 55, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (628, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (628, 125, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (628, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (629, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (629, 142, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (629, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (630, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (630, 142, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (630, 133, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (631, 82, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (631, 18, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (631, 73, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (632, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (632, 55, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (632, 54, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (633, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (634, 55, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (635, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (636, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (636, 68, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (637, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (637, 68, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (638, 154, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (639, 154, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (640, 154, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (641, 158, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (641, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (642, 158, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (642, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (643, 163, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (644, 164, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (645, 159, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (645, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (646, 46, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (647, 154, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (648, 32, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (649, 88, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (650, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (650, 171, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (651, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (651, 171, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (652, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (652, 171, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (653, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (653, 170, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (654, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (654, 170, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (655, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (655, 170, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (656, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (656, 168, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (657, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (657, 168, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (658, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (658, 168, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (659, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (659, 167, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (659, 37, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (660, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (660, 167, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (660, 37, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (661, 145, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (661, 177, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (662, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (662, 177, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (663, 49, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (663, 177, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (664, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (664, 14, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (664, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (665, 61, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (665, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (666, 19, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (666, 14, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (666, 132, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (667, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (667, 127, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (667, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (668, 79, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (668, 127, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (668, 153, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (669, 166, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (669, 180, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (670, 166, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (670, 180, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (671, 166, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (671, 180, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (672, 157, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (672, 179, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (673, 157, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (673, 179, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (674, 89, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (674, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (674, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (675, 89, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (675, 104, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (675, 113, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (676, 169, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (677, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (677, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (677, 20, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (678, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (678, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (678, 158, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (679, 99, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (680, 99, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (681, 176, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (682, 131, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (682, 165, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (683, 131, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (683, 165, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (684, 175, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (684, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (685, 175, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (685, 84, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (686, 126, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (686, 21, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (686, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (687, 126, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (687, 21, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (687, 151, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (688, 181, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (688, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (688, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (689, 181, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (689, 97, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (689, 124, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (690, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (690, 143, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (690, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (691, 38, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (691, 143, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (691, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (692, 178, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (693, 178, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (694, 87, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (694, 8, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (694, 94, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (695, 87, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (695, 8, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (695, 94, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (696, 173, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (696, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (697, 173, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (697, 69, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (698, 174, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (698, 117, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (699, 174, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (699, 117, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (700, 56, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (700, 182, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (701, 7, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (701, 84, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (701, 104, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (702, 167, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (702, 53, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (702, 57, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (703, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (703, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (704, 157, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (704, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (704, 183, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (705, 157, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (705, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (705, 183, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (706, 157, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (706, 93, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (706, 183, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (707, 158, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (707, 170, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (708, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (708, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (708, 139, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (709, 30, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (709, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (709, 139, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (710, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (710, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (710, 15, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (711, 53, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (711, 119, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (711, 15, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (712, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (712, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (712, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (713, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (713, 115, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (713, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (714, 119, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (714, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (714, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (715, 119, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (715, 151, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (715, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (716, 187, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (717, 186, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (718, 188, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (719, 29, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (720, 170, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (721, 11, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (722, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (722, 203, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (723, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (723, 203, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (724, 65, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (724, 203, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (725, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (725, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (726, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (726, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (727, 66, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (727, 22, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (728, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (728, 204, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (729, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (729, 204, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (730, 67, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (730, 204, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (731, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (731, 92, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (731, 53, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (732, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (732, 92, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (732, 53, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (733, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (733, 92, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (733, 125, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (734, 198, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (734, 173, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (734, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (735, 198, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (735, 173, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (735, 91, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (736, 68, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (737, 217, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (738, 26, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (739, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (739, 89, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (739, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (740, 52, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (740, 89, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (740, 83, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (741, 216, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (742, 118, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (742, 19, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (742, 175, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (743, 118, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (743, 19, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (743, 175, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (744, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (744, 72, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (744, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (745, 51, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (745, 146, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (745, 80, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (746, 208, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (747, 196, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (747, 7, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (747, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (748, 196, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (748, 7, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (748, 144, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (749, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (749, 192, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (749, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (750, 20, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (750, 192, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (750, 39, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (751, 199, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (751, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (752, 199, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (752, 11, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (753, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (753, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (754, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (754, 126, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (755, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (755, 27, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (755, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (756, 35, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (756, 27, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (756, 44, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (757, 212, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (757, 12, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (758, 212, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (758, 12, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (759, 218, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (759, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (759, 56, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (760, 218, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (760, 103, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (760, 127, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (761, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (761, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (761, 175, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (762, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (762, 12, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (762, 175, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (763, 102, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (763, 214, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (763, 175, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (764, 166, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (764, 205, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (764, 30, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (765, 39, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (765, 140, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (765, 180, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (766, 222, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (766, 128, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (767, 193, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (768, 194, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (769, 195, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (769, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (770, 195, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (770, 8, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (771, 215, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (771, 109, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (772, 4, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (773, 225, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (774, 197, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (775, 213, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (776, 75, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (777, 160, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (777, 31, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (777, 5, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (778, 209, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (779, 219, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (779, 173, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (779, 147, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (780, 201, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (780, 157, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (780, 13, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (781, 200, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (782, 171, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (782, 43, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (782, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (783, 171, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (783, 43, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (783, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (784, 171, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (784, 43, 0, 2);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (784, 142, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (785, 226, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (785, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (786, 227, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (786, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (787, 229, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (787, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (788, 228, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (788, 140, 1, 3);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (789, 109, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (790, 5, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (791, 230, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (792, 231, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (793, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (794, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (795, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (796, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (797, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (798, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (799, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (800, 232, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (801, 220, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (802, 101, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (803, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (804, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (805, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (806, 224, 0, 1);
INSERT INTO pokemon_abilities (pokemon_id, ability_id, is_hidden, slot) VALUES (807, 10, 0, 1);

DROP TABLE IF EXISTS abilities;
CREATE TABLE abilities
(
	id INTEGER NOT NULL,
	identifier VARCHAR(79) NOT NULL,
	generation_id INTEGER NOT NULL,
	effect VARCHAR(500) NOT NULL,
	flavor_text_1 VARCHAR(200) NOT NULL,
	flavor_text_2 VARCHAR(200),
	flavor_text_3 VARCHAR(200),
	flavor_text_4 VARCHAR(200),
	text_changed_in_version VARCHAR(10) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO abilities
	(id,identifier,generation_id,effect, flavor_text_1,flavor_text_2,flavor_text_3,flavor_text_4, text_changed_in_version)
VALUES(1, 'stench', 3,E'This Pokémon\'s damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.<br>This ability does not stack with a held item.<br>Overworld: The wild encounter rate is halved while this Pokémon is first in the party.' ,'Helps repel wild POKéMON.', 'The stench helps keep wild Pokémon away.', 'The stench may cause the target to flinch.', 'By releasing stench when attacking, this Pokémon may cause the target to flinch.', '5,8,11,17');
INSERT INTO abilities
	(id,identifier,generation_id,effect, flavor_text_1,flavor_text_2,flavor_text_3,flavor_text_4, text_changed_in_version)
VALUES(34,'chlorophyll',3,E'This Pokémon\'s Speed is doubled during strong sunlight.<br>This bonus does not count as a stat modifier.','Raises SPEED in sunshine.',E'Boosts the Pokémon\'s Speed in sunshine.',E'Boosts the Pokémon\'s Speed stat in sunshine.',E'Boosts the Pokémon\'s Speed stat in harsh sunlight.','5,8,15,18');
INSERT INTO abilities
	(id,identifier,generation_id,effect, flavor_text_1,flavor_text_2,flavor_text_3,flavor_text_4, text_changed_in_version)
VALUES(65,'overgrow',3,'When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.','Ups GRASS moves in a pinch.','Powers up Grass-type moves in a pinch.','Powers up Grass-type moves when the Pokémon is in trouble.',E'Powers up Grass-type moves when the Pokémon\'s HP is low.','5,8,15,18');
INSERT INTO abilities
	(id,identifier,generation_id,effect, flavor_text_1,flavor_text_2,flavor_text_3,flavor_text_4, text_changed_in_version)
VALUES (85,'heatproof',4,'This Pokémon takes half as much damage from fire-type moves and burns.','Weakens the power of Fire-type moves.','The heatproof body of the Pokémon halves the damage from Fire-type moves that hit it.',NULL,NULL,'8,17');










/* select pokemon_abilities.pokemon_id,pokemon.identifier,pokemon_abilities.ability_id,abilities.identifier, abilities.effect
from pokemon, pokemon_abilities, abilities
where (pokemon.id = 1 and
	   pokemon.id = pokemon_abilities.pokemon_id and
	   pokemon_abilities.ability_id = abilities.id); */