import React, { Component } from "react";
import axios from "axios";
import MaterialCodeTable from "../../components/SuperAdmin/Tables/MaterialCodeTable";
import AddNewMaterialCode from '../../components/SuperAdmin/Modals/AddNewMaterilCodeModal';

class MaterialCodes extends Component {
  state = {
    MaterialCodes: [],
    currentPage: 1,
    pageSize: 4,
    genres: ["All", "Product", "Material"], //array of genre
    categories: ["clothes", "plastic", "anything"],
    selectedGenre: "All",
    searchQuery: "",
    selectedCategory: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/meterial-code")
      .then((result) => {
        const MaterialCodes = result.data;

        this.setState({ MaterialCodes: MaterialCodes });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
  return (
    <React.Fragment>
        {/* <div className="row">
          <div className="col">
            <ListGroup
              genres={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <SelectSearch
              categories={this.state.categories}
              onChange={this.handleSelectChange}
              categoryValue={this.state.selectedCategory}
            />
          </div>

          <div className="col">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchQuery}
              placeHolder="Search date and time"
            />
          </div>
          <div className="col">
            <Link to="/items/new" className="btn btn-primary mt-2">
              New Item
            </Link>
          </div>
        </div> */}
        <h1 className="mb-5">Material Codes</h1>
        <AddNewMaterialCode show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </AddNewMaterialCode>
        <button type="button" onClick={this.showModal} />

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <MaterialCodeTable filteredItems={this.state.MaterialCodes} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default MaterialCodes;
