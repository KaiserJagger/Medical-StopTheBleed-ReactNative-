// components
import Utils from '../../utils';
import Button from './buttons/normal';
import ThemeSettings from './ThemeSettings';
import ArrowButton from './buttons/arrow';
import Text from './core/Text';
import CustomModal from './modal';
import HR from './hr';
import Bullet from './bullet';
import VideoPlayer from './video';
import Icon from './icon';
import View from './view';
import Image from './image';
import Link from './buttons/link';

const Elements = {
  ...Utils,
  View,
  Link,
  Image,
  ArrowButton,
  VideoPlayer,
  CustomModal,
  Bullet,
  Theme: { ...ThemeSettings },
  Color: ThemeSettings.colorSettings.core,
  Button,
  HR,
  Icon,
  Text
};

module.exports = Elements; // eslint-disable-line no-undef
