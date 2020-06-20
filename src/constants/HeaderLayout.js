import Colors from './Colors';

const Layout = {
  headerLayout: {
    backgroundColor: Colors.backgroundColor,
    height: 90,
    borderBottomWidth: 0, // set this to see the bottom border of header,
    elevation: 0
  },
  // If the title is left (and the icon is right)
  titleLeft: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    bottom: 8.5,
    left: 6 // 6 because the left padding is 16 (you can't change that)
  },
  titleContainerLeft: {
    position: 'absolute',
    left: 0
  },
  iconContainerRight: {
    position: 'absolute',
    right: 22,
    alignItems: 'flex-end'
  },
  // if the title is right (and the icon is left)
  titleRight: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    bottom: 8.5,
    right: 22 // 6 because the left padding is 16 (you can't change that)
  },
  imageRight: {
    position: 'absolute',
    bottom: 8.5,
    right: 22 // 6 because the left padding is 16 (you can't change that)
  },
  titleContainerRight: {
    position: 'absolute',
    right: 0
  },
  iconContainerLeft: {
    position: 'absolute',
    left: 22,
    alignItems: 'flex-end'
  },
  iconFontContainerLeft: {
    position: 'absolute',
    left: 22,
    alignItems: 'flex-end'
  },
  iconSize: 40
};

export default Layout;
