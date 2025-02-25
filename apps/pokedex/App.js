// Dependencias
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';
import ListaPokemon from './src/pages/ListaPokemon';

export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />
                <Route path='/lista' element={<ListaPokemon />} />
            </Routes>
        </NativeRouter>

    );
}