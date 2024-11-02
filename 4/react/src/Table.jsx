import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Table = ({ source }) => {
    const [filter, setFilter] = useState({ shape: '', color: '' });
    const [sortOrder, setSortOrder] = useState('asc');

    // 筛选函数
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 排序函数
    const handleSort = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    // 根据筛选条件过滤数据
    // eslint-disable-next-line react/prop-types
    const filteredData = source.filter((item) => {
        return (
            (filter.shape === '' || item.shape === filter.shape) &&
            (filter.color === '' || item.color === filter.color)
        );
    });

    // 排序数据
    const sortedData = [...filteredData].sort((a, b) => {
        return sortOrder === 'asc' ? a.area - b.area : b.area - a.area;
    });

    return (
        <div>
            <div>
                <label>
                    Shape:
                    <select name="shape" value={filter.shape} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Circle">Circle</option>
                        <option value="Triangle">Triangle</option>
                        <option value="Square">Square</option>
                    </select>
                </label>
                <label>
                    Color:
                    <select name="color" value={filter.color} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                    </select>
                </label>
            </div>

            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '10px' }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Shape</th>
                    <th>Color</th>
                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                        Area {sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.shape}</td>
                        <td>{item.color}</td>
                        <td>{item.area}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table

