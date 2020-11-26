import React, { useState, useContext, useEffect } from 'react';
import { navigate } from 'hookrouter';
import _ from 'lodash';
import * as Icons from 'grommet-icons';
import {
  Avatar,
  Box,
  DataTable as GrommetDataTable,
  Text,
  TextInput,
} from 'grommet';
import { dataTableColumns } from './DataTableColumns';
import { TokenContext } from '../App';
import Fuse from 'fuse.js';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  return (
    <TextInput
      placeholder="Search for tokens"
      size="small"
      style={{ padding: '5px', paddingLeft: '30px' }}
      icon={<Icons.Search size="small" />}
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
};

const DataTableHeader = ({
  pageNumber,
  reachedEnd,
  onPageChange,
  onSearch,
}) => {
  return (
    <Box direction="row" justify="end" align="center" gap="medium">
      <Box direction="row" gap="small" align="center">
        <Avatar
          onClick={pageNumber !== 1 ? () => onPageChange(pageNumber - 1) : null}
          background={pageNumber !== 1 ? 'light-6' : 'light-2'}
          size="small"
        >
          <Icons.FormPrevious size="small" />
        </Avatar>
        <Text size="xsmall">Page {pageNumber}</Text>
        <Avatar
          onClick={!reachedEnd ? () => onPageChange(pageNumber + 1) : null}
          background={!reachedEnd ? 'light-6' : 'light-2'}
          size="small"
        >
          <Icons.FormNext size="small" />
        </Avatar>
      </Box>
      <Box justify="center">
        <Search onSearch={onSearch} />
      </Box>
    </Box>
  );
};

const DataTable = () => {
  const { allTokenList } = useContext(TokenContext);
  const [filters, setFilters] = useState([
    { low: 0, high: 10, property: 'price' },
  ]);
  const [tokenList, setTokenList] = useState(allTokenList);
  const [pagedTokenList, setPagedTokenList] = useState(tokenList.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(tokenList.length <= 20);

  const handlePageChange = (newPageNumber) => {
    let start = 20 * (newPageNumber - 1);
    let end = 20 * newPageNumber;
    let reachedEnd = false;

    if (start < tokenList.length) {
      if (end > tokenList.length) {
        end = tokenList.length;
        reachedEnd = true;
      }

      setPagedTokenList(tokenList.slice(start, end));
      setPageNumber(newPageNumber);
      setReachedEnd(reachedEnd);
    }
  };

  const sortList = ({ property, direction }) => {
    const _tokenList = _(tokenList).orderBy(property, direction).value();
    setTokenList(_tokenList);
    setPagedTokenList(_tokenList.slice(0, 20));
    setPageNumber(1);
  };

  const handleSearch = (search) => {
    let filteredTokenList = allTokenList;

    if (search !== '') {
      const options = {
        includeScore: true,
        shouldSort: true,
        distance: 100000,
        keys: ['did', 'name', 'symbol', 'tags'],
      };
      filteredTokenList = new Fuse(allTokenList, options)
        .search(search)
        .map((_) => _.item);
    }

    // for (let filterIndex in filters) {
    //   const { low, high, property } = filters[filterIndex];
    //   filteredTokenList = filteredTokenList.filter(
    //     (item) => item[property] >= low && item[property] <= high
    //   );
    // }

    setTokenList(filteredTokenList);
    setPageNumber(1);
    setPagedTokenList(filteredTokenList.slice(0, 20));
    setReachedEnd(filteredTokenList.length <= 20);
  };

  return (
    <Box gap="small">
      <DataTableHeader
        pageNumber={pageNumber}
        reachedEnd={reachedEnd}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
      />
      <Box overflow="scroll">
        <GrommetDataTable
          fill
          pin
          sortable
          columns={dataTableColumns}
          data={pagedTokenList}
          border={{ color: 'light-3', side: 'horizontal', size: 'xsmall' }}
          onClickRow={({ datum }) => navigate(`/dmc/token/${datum.did}`)}
          background={{
            header: 'white',
            body: 'light-1',
            footer: 'light-1',
          }}
          pad={{ vertical: 'small', horizontal: 'medium' }}
          sort={{ external: true }}
          onSort={sortList}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
