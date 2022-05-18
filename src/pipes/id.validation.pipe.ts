import {
	ArgumentMetadata,
	PipeTransform,
	BadRequestException,
	Injectable,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class IdValidationPipe implements PipeTransform {
	transform(value: string, meta: ArgumentMetadata) {
		if (meta.type !== 'param') return value;

		if (!Types.ObjectId.isValid(value)) {
			throw new BadRequestException('Invalid format id');
		}
		return value;
	}
}