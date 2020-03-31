// -------------- CHORELIST CLASS EXTENDING FROM THE COMPONENT CLASS START -----------
import { ChoreList } from './components/Chores/ChoreList';
// -------------- CHORELIST CLASS EXTENDING FROM THE COMPONENT CLASS END -----------

// ---------- CHOREINPUT CLASS EXTENDING FROM THE COMPONENT CLASS START --------
import { ChoreInput } from './components/Chores/ChoreInput';
// ---------- CHOREINPUT CLASS EXTENDING FROM THE COMPONENT CLASS END --------

// ------- RENDERING THE COMPONENTS START -------------

new ChoreInput();
new ChoreList('Wesleigh');
new ChoreList('Alexis');
new ChoreList('Tommy');
new ChoreList('Finished');

// ------- RENDERING THE COMPONENTS END -------------
