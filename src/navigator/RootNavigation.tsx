import { SCREENS } from "@constants";
import {
  createNavigationContainerRef,
  CommonActions,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: keyof typeof SCREENS, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  } else {
    console.log("Navigation is not ready!");
  }
};

export const resetNavigation = (
  name: keyof typeof SCREENS,
  params?: object
) => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: name, params }],
    })
  );
};

export const openDrawer = () => {
  navigationRef.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  navigationRef.dispatch(DrawerActions.closeDrawer());
};
