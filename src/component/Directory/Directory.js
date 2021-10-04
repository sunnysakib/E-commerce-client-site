import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../MenuItem/MenuItem";
import { DirectoryBanner, DirectoryContainer } from "./Directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
      <DirectoryBanner>
        <p>Cash on Delivery in over 25 Districts</p>
      </DirectoryBanner>
    </DirectoryContainer>
  );
};

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
