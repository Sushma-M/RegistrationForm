/*Copyright (c) 2015-2016 gmail.com All Rights Reserved.
 This software is the confidential and proprietary information of gmail.com You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with gmail.com*/

package com.registrationform.regformdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/




import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;

import com.registrationform.regformdb.*;

/**
 * Service object for domain model class UserDetails.
 * @see com.registrationform.regformdb.UserDetails
 */

public interface UserDetailsService {
   /**
	 * Creates a new userdetails.
	 * 
	 * @param created
	 *            The information of the created userdetails.
	 * @return The created userdetails.
	 */
	public UserDetails create(UserDetails created);

	/**
	 * Deletes a userdetails.
	 * 
	 * @param userdetailsId
	 *            The id of the deleted userdetails.
	 * @return The deleted userdetails.
	 * @throws EntityNotFoundException
	 *             if no userdetails is found with the given id.
	 */
	public UserDetails delete(Integer userdetailsId) throws EntityNotFoundException;

	/**
	 * Finds all userdetailss.
	 * 
	 * @return A list of userdetailss.
	 */
	public Page<UserDetails> findAll(QueryFilter[] queryFilters, Pageable pageable);
	
	public Page<UserDetails> findAll(Pageable pageable);
	
	/**
	 * Finds userdetails by id.
	 * 
	 * @param id
	 *            The id of the wanted userdetails.
	 * @return The found userdetails. If no userdetails is found, this method returns
	 *         null.
	 */
	public UserDetails findById(Integer id) throws EntityNotFoundException;
	/**
	 * Updates the information of a userdetails.
	 * 
	 * @param updated
	 *            The information of the updated userdetails.
	 * @return The updated userdetails.
	 * @throws EntityNotFoundException
	 *             if no userdetails is found with given id.
	 */
	public UserDetails update(UserDetails updated) throws EntityNotFoundException;

	/**
	 * Retrieve the total count of the userdetailss in the repository.
	 * 
	 * @param None
	 *            .
	 * @return The count of the userdetails.
	 */

	public long countAll();


    public Page<UserDetails> findAssociatedValues(Object value, String entityName, String key,  Pageable pageable);


}

