import db from '../db/db';
import {
  addCashier,
  getAllCashiers,
  getCashierbyId,
  changeCashier,
} from '../helpers/sqlQueries';
import { RequestHandler } from 'express-serve-static-core';
import { HttpCode, status } from '../helpers/constants';

const getAll = (async (_, res, next) => {
  try {
    db.all(
      // sql string
      // ========================
      getAllCashiers,

      // data from request
      // ========================
      [],

      //  callback
      // ========================
      function (err) {
        if (err) {
          res.status(HttpCode.BAD_REQUEST).json({ error: err.message });
          return;
        }
        res.status(HttpCode.OK).json({
          status: status.SUCCESS,
          code: HttpCode.CREATED,
          data: this,
        });
      },
    );
  } catch (err) {
    if (err) next(err);
  }
}) as RequestHandler;

const add = (async (req, res, next) => {
  try {
    const cashier = req.body;
    db.run(
      // sql string
      // ========================
      addCashier,

      // data from request
      // ========================
      [
        cashier.last_name,
        cashier.first_name,
        cashier.city,
        cashier.expirience_years,
        cashier.descr,
        cashier.sex,
      ],

      //  callback
      // ========================
      function (err) {
        if (err) {
          res.status(HttpCode.BAD_REQUEST).json({ error: err.message });
          return;
        }
        res.status(HttpCode.CREATED).json({
          status: status.SUCCESS,
          code: HttpCode.CREATED,
          data: this,
        });
      },
    );
  } catch (err) {
    if (err) next(err);
  }
}) as RequestHandler;

const getById = (async (req, res, next) => {
  try {
    const cashierId = req.params.id;

    db.get(
      // sql string
      // ========================
      getCashierbyId,

      // data from request
      // ========================
      [cashierId],

      //  callback
      // ========================
      function (err, result) {
        if (err) {
          res.status(HttpCode.BAD_REQUEST).json({ error: err.message });
          return;
        }
        res.status(HttpCode.CREATED).json({
          status: status.SUCCESS,
          code: HttpCode.CREATED,
          data: result,
        });
      },
    );
  } catch (err) {
    if (err) next(err);
  }
}) as RequestHandler;

const update = (async (req, res, next) => {
  try {
    const cashierId = req.params.id;
    const updatedCashier = req.body;

    db.run(
      // sql string
      // ========================
      changeCashier,

      // data from request
      // ========================
      [
        updatedCashier.last_name,
        updatedCashier.first_name,
        updatedCashier.descr,
        updatedCashier.city,
        updatedCashier.sex,
        updatedCashier.expirience_years,
        cashierId,
      ],

      //  callback
      // ========================
      function (err) {
        if (err) {
          res.status(HttpCode.BAD_REQUEST).json({ error: err.message });
          return;
        }
        res.status(HttpCode.OK).json({
          status: status.SUCCESS,
          code: HttpCode.OK,
        });
      },
    );
  } catch (err) {
    if (err) next(err);
  }
}) as RequestHandler;

const remove = (async (req, res, next) => {
  try {
    const cashierId = req.params.id;

    db.run(
      // sql string
      // ========================
      getCashierbyId,

      // data from request
      // ========================
      [cashierId],

      //  callback
      // ========================
      function (err) {
        if (err) {
          res.status(HttpCode.BAD_REQUEST).json({ error: err.message });
          return;
        }
        res.sendStatus(HttpCode.NO_CONTENT);
      },
    );
  } catch (err) {
    if (err) next(err);
  }
}) as RequestHandler;

const getCashier1 = (async (req, res, next) => {
  db.serialize(() => {
    console.log('getCashier1');
  });
}) as RequestHandler;

const getcashier2 = (async (req, res, next) => {
  db.serialize(() => {
    console.log('getcashier2');
  });
}) as RequestHandler;

export default {
  getAll,
  getById,
  add,
  update,
  remove,
  getCashier1,
  getcashier2,
};
