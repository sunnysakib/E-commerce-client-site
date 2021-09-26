import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div>
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ 
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
