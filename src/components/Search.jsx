import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
        yearFrom: "1900",
        yearTo: "2021",
    };

    handleSearch = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilterType = (event) => {
        this.setState(() => ({type: event.target.value}),()=>{
            this.props.searchMovies(this.state.search, this.state.type);
        } );
    };

    handleFilterYearFrom = (event) => {
        this.setState({ yearFrom: event.target.value });        
    };

    handleFilterYearTo = (event) => {
        this.setState({ yearTo: event.target.value });
    };

    render() {
        return (
            <div className="container">
                <div className="input-group mb-3" style={{ marginTop: "2rem" }}>
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search here"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleSearch}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={() =>
                            this.props.searchMovies(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>

                <div className="filters">
                    <div className="filter-type">
                        <h4>By type:</h4>
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                        >
                            <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                id="all"
                                value="all"
                                autoComplete="off"
                                onChange={this.handleFilterType}
                                checked={this.state.type === 'all'}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="all"
                            >
                                All
                            </label>

                            <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                id="movie"
                                value="movie"
                                autoComplete="off"
                                onChange={this.handleFilterType}
                                checked={this.state.type === 'movies'}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="movie"
                            >
                                Movies
                            </label>

                            <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                id="series"
                                value="series"
                                autoComplete="off"
                                onChange={this.handleFilterType}
                                checked={this.state.type === 'series'}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="series"
                            >
                                Series
                            </label>

                        </div>
                    </div>

                    <div className="filter-year">
                        <h4>By year:</h4>
                        <div className="input-group mb-3">
                            <input
                                type="number"
                                className="form-control"
                                name="yearFrom"
                                min={1900}
                                max={2021}
                                onChange={this.handleFilterYearFrom}
                            />
                            <input
                                type="number"
                                className="form-control"
                                name="yearTo"
                                onChange={this.handleFilterYearTo}
                                min={1900}
                                max={2021}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
