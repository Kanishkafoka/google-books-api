import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/api';

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const details = await getBookDetails(id);
        setBookDetails(details);
      } catch (error) {
        console.error('Error fetching book details:', error);

        // Log more information about the AxiosError
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received. Request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching book details. Please try again later.</p>}
      {bookDetails && (
        <div>
          <h2>{bookDetails.volumeInfo.title}</h2>
          <p>{bookDetails.volumeInfo.description}</p>
          <p>Authors: {bookDetails.volumeInfo.authors.join(', ')}</p>
          <p>Published Date: {bookDetails.volumeInfo.publishedDate}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
