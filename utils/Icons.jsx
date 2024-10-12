
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export const HomeIcon = (props) => (
        <FontAwesome name="home" size={20} color="white" { ...props} />
);

export const AgregarIcon = (props) => (
        <AntDesign name="pluscircle" size={20} color="white" { ...props} />
); 

export const InfoIcon = (props) => (
        <FontAwesome6 name="info" size={20} color="white" { ...props} />
);

export const UserIcon = (props) => (
        <EvilIcons name="user" size={24} color="white" { ...props} />
); 