"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const dto_1 = require("./dto");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    getAllCars() {
        return this.carsService.findAll();
    }
    getCarsById(id) {
        return this.carsService.findOneById(id);
    }
    createCar(createCarDto) {
        const newCar = this.carsService.create(createCarDto);
        return { newCar };
    }
    updateCar(id, updateCarDto) {
        const updateCar = this.carsService.update(id, updateCarDto);
        return { updateCar };
    }
    deleteCar(id) {
        return this.carsService.delete(id);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getCarsById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCarDto !== "undefined" && dto_1.CreateCarDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "createCar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.UpdateCarDto !== "undefined" && dto_1.UpdateCarDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "deleteCar", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [typeof (_a = typeof cars_service_1.CarsService !== "undefined" && cars_service_1.CarsService) === "function" ? _a : Object])
], CarsController);
//# sourceMappingURL=cars.controller.js.map