class WordSearch {
  constructor(wordsearch, keyword) {
    this.wordsearch = wordsearch;
    this.keyword = keyword;
  }

  _countHorizontally(array = this.wordsearch) {
    const joinedRows = array.map((row) => row.join(""));
    const joinedReverseRows = array.map((row) =>
      row.slice(0).reverse().join("")
    );
    const regex = new RegExp(this.keyword, "g");

    let countFromLeftToRight = 0;
    let countFromRightToLeft = 0;

    for (let i = 0; i < joinedRows.length; i++) {
      countFromLeftToRight += (joinedRows[i].match(regex) || []).length;
    }

    for (let i = 0; i < joinedReverseRows.length; i++) {
      countFromRightToLeft += (joinedReverseRows[i].match(regex) || []).length;
    }

    return countFromLeftToRight + countFromRightToLeft;
  }

  _getColumn(n) {
    return this.wordsearch.map((row) => row[n]);
  }

  _countVertically() {
    const numberOfColumns =
      this.wordsearch.length > 1 ? this.wordsearch[0].length : 1;
    const columns = [];

    for (let i = 0; i < numberOfColumns; i++) {
      const currentColumn = this._getColumn(i);
      columns.push(currentColumn);
    }

    return this._countHorizontally(columns);
  }

  _getDiagonalTopLeftToBottomRight() {
    const Ylength = this.wordsearch.length;
    const Xlength = this.wordsearch[0].length;
    const maxLength = Math.max(Xlength, Ylength);

    let diagonals = [];
    let temp;

    for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (let y = Ylength - 1; y >= 0; --y) {
        let x = k - y;
        if (x >= 0 && x < Xlength) {
          temp.push(this.wordsearch[y][x]);
        }
      }
      diagonals.push(temp);
    }
    return diagonals;
  }

  _getDiagonalBottomLeftToTopRight() {
    const Ylength = this.wordsearch.length;
    const Xlength = this.wordsearch[0].length;
    const maxLength = Math.max(Xlength, Ylength);

    let diagonals = [];
    let temp;

    for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (var y = Ylength - 1; y >= 0; --y) {
        var x = k - (Ylength - y);
        if (x >= 0 && x < Xlength) {
          temp.push(this.wordsearch[y][x]);
        }
      }
      diagonals.push(temp);
    }
    return diagonals;
  }

  _countDiagonally() {
    const firstValidDiagonals = this._getDiagonalTopLeftToBottomRight(
      this.wordsearch
    ).filter((diagonal) => diagonal.length >= this.keyword.length);

    const secondValidDiagonals = this._getDiagonalBottomLeftToTopRight(
      this.wordsearch
    ).filter((diagonal) => diagonal.length >= this.keyword.length);

    return (
      this._countHorizontally(firstValidDiagonals) +
      this._countHorizontally(secondValidDiagonals)
    );
  }

  countAllOcurrences() {
    return (
      this._countHorizontally() +
      this._countVertically() +
      this._countDiagonally()
    );
  }
}

export default WordSearch;
