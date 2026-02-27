import { TennisMatchData, TennisDataMap } from '@/types';

export const tennisData: TennisDataMap = {
  'Rafael Nadal': {
    '2009': [
      { player2: 'Roger Federer', break1: 44 },
      { player2: 'Fernando Verdasco', break1: 20 },
      { player2: 'Gilles Simon', break1: 58 },
      { player2: 'Fernando Gonzalez', break1: 46 },
      { player2: 'Tommy Haas', break1: 33 },
      { player2: 'Roko Karanusic', break1: 86 },
    ],
    '2010': [
      { player2: 'Ivo Karlovic', break1: 50 },
      { player2: 'Philipp Kohlschreiber', break1: 42 },
      { player2: 'Lukas Lacko', break1: 70 },
      { player2: 'Peter Luczak', break1: 44 },
    ],
    '2011': [
      { player2: 'Marin Cilic', break1: 36 },
      { player2: 'Bernard Tomic', break1: 37 },
      { player2: 'Ryan Sweeting', break1: 53 },
      { player2: 'Marcos Daniel', break1: 100 },
    ],
    '2012': [
      { player2: 'Roger Federer', break1: 38 },
      { player2: 'Tomas Berdych', break1: 38 },
      { player2: 'Feliciano Lopez', break1: 28 },
      { player2: 'Lukas Lacko', break1: 50 },
      { player2: 'Tommy Haas', break1: 60 },
      { player2: 'Alex Kuznetsov', break1: 60 },
    ],
  },
  'Roger Federer': {
    '2009': [
      { player2: 'Andy Roddick', break1: 31 },
      { player2: 'Tomas Berdych', break1: 67 },
      { player2: 'Evgeny Korolev', break1: 58 },
      { player2: 'Andreas Seppi', break1: 30 },
    ],
    '2010': [
      { player2: 'Andy Murray', break1: 33 },
      { player2: 'Nikolay Davydenko', break1: 57 },
      { player2: 'Lleyton Hewitt', break1: 33 },
      { player2: 'Victor Hanescu', break1: 45 },
      { player2: 'Igor Andreev', break1: 47 },
    ],
    '2011': [
      { player2: 'Stanislas Wawrinka', break1: 71 },
      { player2: 'Tommy Robredo', break1: 40 },
      { player2: 'Xavier Malisse', break1: 41 },
      { player2: 'Gilles Simon', break1: 44 },
      { player2: 'Lukas Lacko', break1: 50 },
    ],
    '2012': [
      { player2: 'Juan Martin Del Potro', break1: 63 },
      { player2: 'Bernard Tomic', break1: 60 },
      { player2: 'Ivo Karlovic', break1: 33 },
      { player2: 'Alexander Kudryavtsev', break1: 46 },
    ],
  },
  'Novak Djokovic': {
    '2009': [
      { player2: 'Marcos Baghdatis', break1: 29 },
      { player2: 'Amer Delic', break1: 38 },
      { player2: 'Jeremy Chardy', break1: 100 },
      { player2: 'Andrea Stoppini', break1: 39 },
    ],
    '2010': [
      { player2: 'Lukasz Kubot', break1: 67 },
      { player2: 'Denis Istomin', break1: 64 },
      { player2: 'Marco Chiudinelli', break1: 44 },
      { player2: 'Daniel Gimeno-Traver', break1: 36 },
    ],
    '2011': [
      { player2: 'Andy Murray', break1: 39 },
      { player2: 'Roger Federer', break1: 36 },
      { player2: 'Tomas Berdych', break1: 50 },
      { player2: 'Nicolas Almagro', break1: 38 },
      { player2: 'Viktor Troicki', break1: 50 },
      { player2: 'Ivan Dodig', break1: 35 },
      { player2: 'Marcel Granollers', break1: 58 },
    ],
    '2012': [
      { player2: 'Rafael Nadal', break1: 35 },
      { player2: 'Andy Murray', break1: 42 },
      { player2: 'David Ferrer', break1: 42 },
      { player2: 'Lleyton Hewitt', break1: 67 },
      { player2: 'Nicolas Mahut', break1: 62 },
      { player2: 'Santiago Giraldo', break1: 54 },
      { player2: 'Paolo Lorenzi', break1: 69 },
    ],
  },
};

export const players: string[] = ['Rafael Nadal', 'Roger Federer', 'Novak Djokovic'];
export const years: string[] = ['2009', '2010', '2011', '2012'];
